import { PolarArea } from 'vue-chartjs'




export default {
  extends: PolarArea,
  props: ['data', 'options'],
  mounted () {
    this.renderChart({
      
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
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