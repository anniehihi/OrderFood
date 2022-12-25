<template>
<div>
<div class="chartCard">
  <div class="chartBox">
    <canvas id="myChart"></canvas>
  </div>
</div>
</div>
</template>

<script>
import { Chart, TimeScale, DoughnutController, BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title, ArcElement } from 'chart.js'

Chart.register(TimeScale, DoughnutController, BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title, ArcElement);
import 'chartjs-adapter-date-fns';
export default {
  name:'ChartBar',
  data(){
    return{

    }
  },
  props:{
    dataChart: {
      type:Array,
      default:null
    }
  },
  mounted() {
    let data = {
      labels: [
        'User',
        'Food',
        'Order'
      ],
      datasets: [{
        label: 'Thống kê tổng quát',
        data: this.dataChart,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    const config = {
      type: 'doughnut',
      data: data,
      options : {
        plugins: {
          title: {
            display: true,
            text: 'Thống kê tổng quát',
          }
        },
      }
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
    console.log(myChart)
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.chartCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chartBox {
  width: 500px;
  padding: 20px;
  border-radius: 20px;
  background: white;
}
</style>