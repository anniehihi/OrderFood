<template>
  <div>
    <NavBarAdmin></NavBarAdmin>
    <div class="admin-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name</label>
          <input v-model.trim="food.food_name" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Price</label>
          <input v-model="food.food_price" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Category</label>
          <select v-model="food.food_category" class="form-control">
            <option v-for="category in categorys" :key="category.category_id" :value="category.category_id">{{ category.category_name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Status</label>
          <select v-model="food.food_status" class="form-control">
            <option v-for="item in status" :key="item.value" :value="item.text">{{ item.text }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea v-model="food.food_desc" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import NavBarAdmin from "@/components/NavBarAdmin";
import axios from "axios";
export default {
  name: "FoodForm",
  data() {
    return {
      food: {
      },
      categorys: [],
      status: [
        {
          text: 'best seller',
          value: 1
        },
        {
          text: 'new dishes',
          value: 2
        },
        {
          text:'normal',
          value: 3
        },
        {
          text: 'seasonal dishes online only',
          value: 4
        }
      ]
    }
  },
  methods : {
    // async getFood() {
    //   this.food = (await axios.get('/foods/'+this.$route.params.id)).data;
    // },
    async getCategory() {
      this.categorys = (await axios.get('/categorys')).data;
    },
    async submitForm() {
      (await axios.post('/foods',this.food)).data;
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getCategory()
  },
  components: {NavBarAdmin}
}
</script>

<style scoped>
.admin-container {
  background-color: #fff;
  height: 100vh;
  padding: 2rem 9%;
  font-size: 16px;
}
</style>