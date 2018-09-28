import { Doughnut } from 'vue-chartjs'




export default {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart({
      
        labels: ['Mainland Chinese(%)', 'Australian ans New Zealanders(%)', 'Russian(%)', 'Thai(%)', 'Other Asians(%)', 'Other Europeans(%)','Others(%)'],
        datasets: [{
            label: 'Distribution of nationality',
            data: [23.91, 12.94, 16.71, 16.54, 11.71, 12.61, 5.57],
            
            backgroundColor:[ 
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(132,255,99, 0.6)',
            ],
           
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        
          ,options:{
            title: {
              display: true,
              text: 'Distribution of nationality'
          }
        
      }
      })
    }
  }