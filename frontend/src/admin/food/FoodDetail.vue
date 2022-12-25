<template>
  <div>
    <NavBarAdmin></NavBarAdmin>
    <div class="admin-container">
      <div class="d-flex mb-2">
        <h2 class="text-center my-2">Food Detail</h2>
      </div>
      <div class="table-responsive">
        <div class="mb-2">
          <span class="title">Name :</span> {{food.food_name}}
        </div>
        <div class="mb-2">
          <span class="title">Category :</span> {{food.food_category}}
        </div>
        <div class="mb-2">
          <span class="title">Star :</span> {{food.food_star}}
        </div>
        <div class="mb-2">
          <span class="title">Status :</span> {{food.food_status}}
        </div>
        <div class="mb-2">
          <span class="title">Type :</span> {{food.food_type}}
        </div>
        <div class="mb-2">
          <span class="title">Vote :</span> {{food.food_vote}}
        </div>
        <div class="mb-2">
          <span class="title">Discount :</span> {{food.food_discount}}
        </div>
        <div class="mb-2">
          <span class="title">Description :</span> {{food.food_desc}}
        </div>
        <div class="text-center">
          <button class="btn-secondary" @click="$router.go(-1)">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBarAdmin from "@/components/NavBarAdmin";
export default {
  components: {NavBarAdmin },
  name: "FoodDetail",
  data() {
    return {
      food : {}
    }
  },
  methods : {
    async getFood() {
        this.food = (await axios.get('/foods/'+this.$route.params.id)).data;
    }
  },
  mounted() {
    this.getFood()
  }
}
</script>

<style scoped>
.admin-container {
  background-color: #fff;
  height: 100vh;
  padding: 2rem 9%;
  font-size: 16px;
}
.title {
  font-weight: bold;
}
.btn-secondary{
  padding: .7rem 1.8rem;
  font-size: 1.7rem;
  cursor: pointer;
  color: #fff;
  border-radius: .5rem;
  background-color: #615E5EFF;
}
</style>