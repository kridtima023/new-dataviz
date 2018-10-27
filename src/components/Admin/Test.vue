<template>
    <div id="app">
        <h1>Vue-xlsx-table</h1>
        <p>Not need upload, view xlsx or xls file in your browser, Supported by js-xlsx.</p>
        <vue-xlsx-table @on-select-file="handleSelectedFile">
            Select one file
        </vue-xlsx-table>

     
        <b-modal  v-model="modalShow" v-if="xlsdata"  title="If all right" @ok="handleOk">            
            <table  class="table">
                <thead >
                    <tr>
                        <td v-for="(head, index) in xlsdata.header" :key="index">{{head}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(body, index) in xlsdata.body" :key="index">
                        <td v-for="item in body" :key="item">{{item}}</td>
                    </tr>
                </tbody>
            </table>            
        </b-modal>
       
      <div v-if="isdataOk">        
        <table class="table" >            
          <thead >
            <tr>
              <td v-for="(head, index) in xlsdata.header" :key="index">{{head}}</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(body, index) in xlsdata.body" :key="index">
              <td v-for="item in body" :key="item">{{item}}</td>
            </tr>
          </tbody>
        </table>
     

        <b-form-group class="head mt-3" label="Select a Chart">
          <b-form-radio-group v-model="selected" :options="options"></b-form-radio-group>
        </b-form-group>       


        <div class="small">
          <bar v-if="selected == 'bar'" :data="graphdata"></bar>
          <line-chart v-if="selected == 'line'" :data="graphdata"></line-chart>
          <doughnut v-if="selected =='doughnut'" :data="graphdata"></doughnut>
          <pie v-if="selected =='pie'" :data="graphdata"></pie>
          <horizontal-bar v-if="selected =='horizontal'" :data="graphdata"></horizontal-bar>      
        
        </div>
      </div>
     

    </div>
</template>

<script>
import db from "@/firebase/init";
import Bar from '../Chart/BarChart.js'
import LineChart from '../Chart/LineChart.js'
import Doughnut from '../Chart/DoughnutChart.js'
import Pie from '../Chart/PieChart.js'
import HorizontalBar from '../Chart/HorizontalChart.js'


export default {
  name: "app",
  components : { Bar, LineChart, Doughnut, Pie, HorizontalBar},

  data() {
    return {
      graphdata : {
        labels : [],
        values : []
      },
      xlsdata: null,
      modalShow: false,
      isdataOk: false,
      selected: null,
      options: [{ text:'Line' , value:'line'},
                {text:'Bar',value:'bar'},
                { text: 'Doughnut', value: 'doughnut' },
                { text: 'Pie', value: 'pie' },
                { text: 'Horizontal', value: 'horizontal' }
              ]
    };
  },
  methods: {
    handleSelectedFile(convertedData) {
      console.log(convertedData);
      this.xlsdata = convertedData;
      //   window.alert(JSON.stringify(convertedData))
      this.modalShow = true;
    },
    handleOk() {
      
      this.graphdata.labels = this.xlsdata.header
      for(var key in this.xlsdata.body[0]){
        this.graphdata.values.push(this.xlsdata.body[0][key])
      }



      this.isdataOk=true;
      // db.collection("excel")
      //   .add(this.xlsdata)
      //   .then(() => {
      //     console.log("added");
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
   
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
h1,
h2,
h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.t-center {
  text-align: center;
  margin: 20px;
}
.mt150 {
  margin-top: 150px;
}
</style>