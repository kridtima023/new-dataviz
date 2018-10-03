<template>
<div>
    <h2 class="center-align indigo-text ">Add a New Blog</h2>
<!-- image -->
<div>  
   <img :src="imagepreview" class="preview-image" v-on:click="openupload" alt="Responsive image" />
   <b-form-file type="file" name="image" id="file-filed" v-on:change="updatepreview"></b-form-file>
</div>

        <!-- <button>
            <i class="fa fa-upload" @click="upload">Upload</i>
        </button> -->

    <label>Title :</label>
    <b-form-input     type="text"
                      v-model="title"
                      required
                      placeholder="Enter Title">
    </b-form-input>

    <label>Description :</label>
    <b-form-textarea id="description"
                     v-model="description"
                     placeholder="Enter Description"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    <!-- preview -->
    <!-- <pre class="mt-3">{{ blog.title }}</pre> -->


    <!-- select a chart -->
    <b-form-group label="Select a Chart">
      <b-form-radio-group v-model="selected" 
                          :options="options">
      </b-form-radio-group>
    </b-form-group>


  <!-- preview -->
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
    <!-- chart -->
  <div class="small">
  <bar v-if="selected == 'bar'"></bar>
  <line-chart v-if="selected == 'line'"></line-chart>
  </div>

  <!-- submit -->
    <div class="btn">
      <b-button v-on:click="Addblog()" >Confirm</b-button>
      <!-- <router-link :to="{name : 'Overviews'}"><b-button v-on:click="Addblog()" >Confirm</b-button></router-link> -->
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

      imagepreview : require('../../assets/Upload.png'),
      file: null,
      description : null,
      slug : null ,
      title : null,
      selected: null,
      options: [{ text:'Line' , value:'line'},{text:'Bar',value:'bar'}]
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
</style>
