import { Radar } from 'vue-chartjs'




export default {
  extends: Radar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart({
      
        labels: ['Mainland Chinese(%)', 'Australian ans New Zealanders(%)', 'Russian(%)', 'c(%)', 'Other Asians(%)', 'Other Europeans(%)','Others(%)'],
        datasets: [{
            label: "Holiday(%)",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [94.0,2.40,0.00,3.77,0.68,0.00,0.68]
        },{
            label: "Meeting",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [91.14,3.80,1.90,3.16,0.00,2.53,1.27]
            },{
              label: "Friends",
              fill: true,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(255,99,132,1)",
              data: [97.55,0.00,0.98,5.88,0.49,0.98,1.47]
              },{
                label: "Prewedding",
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                data: [69.31,24.26,20.30,2.48,12.87,3.47,2.97]
                }
        ],options:{
            title: {
              display: true,
              text: 'Distribution of nationality'
          }
        
        }
      })
    }
  }