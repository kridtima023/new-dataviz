<template>
<div>
    <h2 class="center-align indigo-text ">Add a New Blog</h2>
  
  <!-- image -->
    <b-img blank blank-color="#ccc" width="450" height="300" alt="placeholder" v-model="blog.img" >
    {{ blog.file }}
    </b-img>
  <!-- Styled -->
    <b-form-file v-model="blog.file" :state="Boolean(blog.file)" placeholder="Choose a file..."></b-form-file>
    <div class="mt-3">Selected file: {{blog.file && blog.file.name}}</div>

    <label>Title :</label>
    <b-form-input     type="text"
                      v-model="blog.title"
                      required
                      placeholder="Enter Title">
    </b-form-input>

    <label>Description :</label>
    <b-form-textarea id="description"
                     v-model="blog.description"
                     placeholder="Enter Description"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    <!-- preview -->
    <!-- <pre class="mt-3">{{ blog.title }}</pre> -->


    <!-- select a chart -->
    <b-form-group label="Select a Chart">
      <b-form-radio-group v-model="blog.selected" 
                          :options="options">
      </b-form-radio-group>
    </b-form-group>





  <!-- preview -->
    <div class="mt-3">
      Selected: <strong>{{ blog.selected }}</strong>
    </div>
    <!-- chart -->
  <div class="small">
  <bar v-if="blog.selected == 'bar'"></bar>
  <line-chart v-if="blog.selected == 'line'"></line-chart>
  </div>

  <!-- submit -->
    <div class="btn">
      <b-button v-on:click="Addblog()" >Confirm</b-button>
      <router-link :to="{ name : 'Navbar'}"><b-button>Cancel</b-button></router-link>
    </div>

 <!-- Plain mode -->
  <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file> -->
 <!-- Plain mode
  <b-form-file v-model="file2" class="mt-3" plain></b-form-file> -->


  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import Bar from '../Chart/BarChart.js'
import LineChart from '../Chart/LineChart.js'

export default {
    name : 'Addblog',
    components : { Bar, LineChart},

    data () {
    return {

      blog :{
   
      img : null ,
      file: null ,
      description : null,
      slug : null ,
      title : null,
      selected: null,
      
    } ,
  options: [{ text:'Line' , value:'line'},{text:'Bar',value:'bar'}]
      }
      
  },
  methods : {
    Addblog() {
      //create a slug 
      this.slug = slugify(this.blog.title,{
        replacement :'-',
        remove : /[$*_+~.()'"!\-;@]/g,
        lower : true 
      })
      db.collection('blogs').add({
        blog : this.blog,       
        options : this.options,
        slug : this.slug,
        
      }).then(() => {
        // this.$router.push({ name : 'Navbar '})
        
             
      })

        console.log(this.blog,this.options)
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
</style>
