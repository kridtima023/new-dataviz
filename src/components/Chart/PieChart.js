import { Pie } from 'vue-chartjs'




export default {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    this.renderChart({
      
        labels: this.data.labels,
        datasets: [{
            label: 'Distribution of nationality',
            data: this.data.values,
            
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