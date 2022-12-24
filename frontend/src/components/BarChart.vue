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
    const data = {
      labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      datasets: [{
        label: 'Số đơn hàng trong tuần',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
      }]
    };
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
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
.chartBox {
  padding: 20px;
  border-radius: 20px;
  background: white;
}
</style>