<template>
    <div class="admin-container">
      <div>
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ dashboard.count_bills }}</h3>

                <p>New Orders</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>{{ dashboard.count_users }}</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
      </div>
      </div>
      <div class="box-chart">
        <div class="table-responsive">
          <Doughnut :dataChart="chart" v-if="loaded"></Doughnut>
        </div>
        <div class="table-responsive">
          <BarChart></BarChart>
        </div>
      </div>
    </div>
</template>


<script>
import axios from "axios";
import { mapMutations } from "vuex";
import Doughnut from "@/components/Doughnut";
import BarChart from "@/components/BarChart";
export default {
    name: 'Dashboard',
    components: {Doughnut, BarChart},
    data() {
        return {
            dashboard: {},
            chart: [],
            loaded: false
        }
    },

    mounted() {
        this.getChart()
        this.getDashboard()
        // if (!this.admin) {
        //     this.$router.push("/");
        // }
    },

    methods: {
        ...mapMutations(["setAdmin"]),

        async getDashboard() {
          this.dashboard = (await axios.get('/dashboard')).data;
          this.loaded = true
        },

        async getChart() {
          this.chart = (await axios.get('/chart')).data;
        },


    },
}
</script>

<style lang="css" scoped>
@import "../assets/css/adminlte.min.css";
.admin-container {
    height: 100vh;
    padding: 2rem 9%;
    font-size: 16px;
    background-color: #f4f6f9;
}

.project-list>tbody>tr>td {
    padding: 12px 8px;
}

.project-list>tbody>tr>td .avatar {
    width: 22px;
    border: 1px solid #CCC;
}
.box-chart {
  display: flex;
  justify-content: space-between;
}
.table-responsive:last-child {
    margin-top: 8vh;
    width: 60%;
    margin-left: 60px;
}
.table-responsive:first-child {
  margin-top: 8vh;
  width: 40%;
}

.action-btn,
.cancel-btn,
.paid-btn {
    width: 100px;
    height: 25px;
    color: white;
    text-transform: capitalize;
}

.action-btn {
    background-color: #0da9ef;
    margin-right: 10px;
}

.cancel-btn,
.paid-btn {
    background-color: red;
}

.action-btn:hover {
    background-color: #27ae60;
}
</style>