<template>
  <div>
    <b-card class="card mb-3">
      <h2 class="add">Create a New Blog</h2>

    
<!-- image -->
      <div class="add mt-3">  
        <img :src="imagepreview" class="preview-image" v-on:click="openupload" alt="Responsive image" />
        <b-form-file class="mt-3" type="file" name="image" id="file-filed"  v-on:change="updatepreview"></b-form-file>
      </div>



      <label class="head mt-3">Title </label>
        <b-form-input   class="input"    
                        type="text"
                        v-model="title"
                        required
                        placeholder="Enter Title">
        </b-form-input>

      <label class="head mt-3">Description </label>
        <b-form-textarea  class="input"
                          type="text"
                      id="description"
                      v-model="description"
                      placeholder="Enter Description"
                      :rows="3"
                      :max-rows="6">
        </b-form-textarea>
    <!-- preview -->
    <!-- <pre class="mt-3">{{ blog.title }}</pre> -->


    <!-- select a chart -->
      <b-form-group class="head mt-3" label="Select a Chart">
        <b-form-radio-group 
                          v-model="selected" 
                          :options="options">
        </b-form-radio-group>
      </b-form-group>

<!-- <div>
  <b-row> 
    <b-card-group>
      <b-col>
        <b-card class="box">
          <img  src="../../assets/bar.png" width="80"/>
          <p>Bar Chart</p>
        </b-card>

        <b-card class="box">
          <img  src="../../assets/polar.png" width="80"/>
          <p>Polar Area</p>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="box">
          <img  src="../../assets/line.png" width="80"/>
          <p>Line Chart</p>
        </b-card>

        <b-card class="box">
          <img  src="../../assets/doughnut.png" width="80"/>
          <p>Doughnut Chart</p>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="box">
          <img  src="../../assets/pie.png" width="80"/>
          <p>Pie Chart</p>
        </b-card>

        <b-card class="box">
          <img  src="../../assets/horizon.png" width="80"/>
          <p>Horizontal Bars</p>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="box">
          <img  src="../../assets/radar.png" width="80"/>
          <p>Radar Chart</p>
        </b-card>

        <b-card class="box">
          <img  src="../../assets/bubble.png" width="80"/>
          <p>Bubble Chart</p>
        </b-card>
      </b-col>
    </b-card-group>
  </b-row>
</div> -->


  <!-- preview -->
      <div class="head mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>

    <!-- chart -->
      <div class="small">
        <bar v-if="selected == 'bar'"></bar>
        <line-chart v-if="selected == 'line'"></line-chart>
        <doughnut v-if="selected =='doughnut'"></doughnut>
        <pie v-if="selected =='pie'"></pie>
        <radar v-if="selected =='radar'"></radar>
        <polar-area v-if="selected =='polar'"></polar-area>
        <bubble v-if="selected =='bubble'"></bubble>
        <horizontal-bar v-if="selected =='horizontal'"></horizontal-bar>
        
        
      </div>

  <!-- submit -->
      <div class="add">
        <b-button variant="success" v-on:click="Addblog()" >Confirm</b-button>
      <!-- <router-link :to="{name : 'Overviews'}"><b-button v-on:click="Addblog()" >Confirm</b-button></router-link> -->
        <router-link :to="{ name : 'Navbar'}" >
          <b-button variant="danger">Cancel</b-button>
        </router-link>
      </div>

 <!-- Plain mode -->
  <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file> -->
 <!-- Plain mode
  <b-form-file v-model="file2" class="mt-3" plain></b-form-file> -->

    </b-card>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import Bar from '../Chart/BarChart.js'
import LineChart from '../Chart/LineChart.js'
import Doughnut from '../Chart/DoughnutChart.js'
import Pie from '../Chart/PieChart.js'
import Radar from '../Chart/RadarChart.js'
import PolarArea from '../Chart/PolarChart.js'
import Bubble from '../Chart/BubbleChart.js'
import HorizontalBar from '../Chart/HorizontalChart.js'

export default {

    name : 'Addblog',
    components : { Bar, LineChart, Doughnut, Pie, Radar, PolarArea, Bubble, HorizontalBar},

    data () {
    return {

      imagepreview : require('../../assets/Upload.png'),
      file: null,
      description : null,
      slug : null ,
      title : null,
      selected: null,
      options: [{ text:'Line' , value:'line'},
                {text:'Bar',value:'bar'},
                { text: 'Doughnut', value: 'doughnut' },
                { text: 'Pie', value: 'pie' },
                { text: 'Radar', value: 'radar' },
                { text: 'Polar', value: 'polar' },
                { text: 'Bubble', value: 'bubble' },
                { text: 'Horizontal', value: 'horizontal' }
              ]
      }
      
  },
  methods : {
    Addblog() {
      //create a slug 
      this.slug = slugify(this.title,{
        replacement :'-',
        remove : /[$*_+~.()'"!\-;@]/g,
        lower : true 
      })
      db.collection('blogs').add({
        imagepreview : this.imagepreview,
        title : this.title,
        description : this.description,
        selected : this.selected,      
        slug : this.slug,
        
      }).then(() => {
        // this.$router.push({ name : 'Overviews '})
        this.$router.replace({name : 'Overviews'})
        
      }).catch(err =>{
            console.log(err)
     })
 console.log(this.title,this.description,this.selected)
    },
    openupload(){
         document.getElementById('file-filed').click()
     },
      updatepreview(e){
         var reader, files = e.target.files 
         if(files.length == 0 ){
             console.log('empty')
         }
         reader = new FileReader()
         reader.onload = (e) => { 
             this.imagepreview = e.target.result
         }
         reader.readAsDataURL(files[0])

        //  db.collection('blogs').add({
        //     imagepreview : this.imagepreview
        //  })
        //  console.log(this.imagepreview)
     }
    }

}
</script>

<!-- form-file.vue -->

<style>
.btn {
  margin: 5px;
  
}
.small {
  max-width: 600px;
  margin:  100px auto;
}
.add {
  text-align: center;
  font-family: 'Proxima Nova Soft', 'Helvetica Neue', sans-serif;
  
}
.head {
  
  color: rgb(223, 128, 223);
  font-family: Tw Cen MT;
  font-size: 30px;  
}

.input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  font-family: Tw Cen MT;
  
}
.box {
  font-size: 15px;
  text-align: center;
  width: 170px;
  height: 150px;
  margin: 10px ;
  
}





 
</style>
