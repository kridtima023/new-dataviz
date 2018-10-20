import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    
    this.renderChart({
      labels: this.data.labels,
      datasets: [{ 
        data: this.data.values,
        label: '',
        borderColor: "#e20b0b",
        fill: false
      }
    ],options:{
      title: {
        display: true,
        text: "Relationship between purpose and nationality",
        fontSize:25,
        position:"top"
      }
    }
  })
    
  }
}
