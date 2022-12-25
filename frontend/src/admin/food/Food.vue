<template>
  <div>
    <NavBarAdmin></NavBarAdmin>
    <div class="admin-container">
      <div class="d-flex=">
       <h2 class="text-center mt-2">LIST FOODS</h2>
        <router-link to="/admin/food/create"><button class="btn btn-success float-right">Create</button></router-link>
      </div>
      <div class="table-responsive">
        <table class="table colored-header datatable project-list">
          <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(b) in allFoods" :key="b.food_id">
            <td>{{ b.food_id }}</td>
            <td><router-link :to="'/admin/food/'+b.food_id">{{ b.food_name }}</router-link></td>
            <td><img :src="require('../../assets/images/'+ b.food_src)" width="100" height="100"></td>
            <td>{{ b.food_star }}</td>
            <td>{{ b.food_desc }}</td>
            <td>
              <button class="btn-warning mr-2">Edit</button>
              <button @click="deleteFood(b.food_id)" class="btn-danger">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import NavBarAdmin from "@/components/NavBarAdmin";
import { mapState, mapMutations } from "vuex";
export default {
  name: 'Dashboard',
  components: {NavBarAdmin },
  data() {
    return {
      allFoods: [],
    }
  },

  mounted() {
    this.getAllFoods()
  },

  computed: {
    ...mapState(["allFoods", "admin"]),
  },

  methods: {
    ...mapMutations(["setAdmin"]),

    async getAllFoods() {
      this.allFoods = (await axios.get('/foods')).data;
    },

    handleLogout: function () {
      this.setAdmin("");
    },

    async deleteFood(id) {
      let result = confirm('Bạn có chắc muốn xóa!')
      if(result) {
        await (axios.delete('/foods/'+id));
        this.getAllFoods()
      } else{
        console.log('cc')
      }
    }

  },
}
</script>

<style scoped>
.admin-container {
  background-color: #fff;
  height: 100vh;
  padding: 2rem 9%;
  font-size: 16px;
}

.project-list>tbody>tr>td {
  padding: 12px 8px;
}

.project-list>tbody>tr>td .avatar {
  width: 22px;
  border: 1px solid #CCC;
}

.table-responsive {
  margin-top: 8vh;
}

.btn-warning,
.btn-danger {
  padding: .7rem 1.8rem;
  font-size: 1.7rem;
  cursor: pointer;
  color: #fff;
  border-radius: .5rem;
}
</style>