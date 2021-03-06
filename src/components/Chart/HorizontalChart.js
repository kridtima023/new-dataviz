import { HorizontalBar } from 'vue-chartjs'
export default {
  
    extends: HorizontalBar,
    props: ['data', 'options'],
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: this.data.labels,
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: this.data.values,
        }
    ],options:{
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
    }
            
           
          })
        
      }
    }
  