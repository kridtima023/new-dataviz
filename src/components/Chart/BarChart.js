import { Bar } from 'vue-chartjs'


export default {
  
    extends: Bar,
    props: ['data', 'options'],
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: this.data.labels,
        datasets: [{
            label: '',
            data: this.data.values,
            
            backgroundColor:[ 
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
           
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        
      })
    
    }
  }

  