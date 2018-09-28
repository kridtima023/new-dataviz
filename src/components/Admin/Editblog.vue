<template>
    <div v-if="blog" class="edit-blog">
        <h2>Edit Your Blog {{blog.title}}</h2>
        <!-- {{this.$route.params.edit_slug}} -->

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
                          :options="blog.options">
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
      <b-button v-on:click="Editblog()" >Update</b-button>
      <router-link :to="{ name : 'Navbar'}"><b-button>Cancel</b-button></router-link>
    </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import Bar from '../Chart/BarChart.js'
import LineChart from '../Chart/LineChart.js'
export default {
    name : 'Editblog',
    data(){
        return{
            blog : null ,
        }
    },
    created(){
        let ref = db.collection('blogs').where('slug','==',this.$route.params.edit_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data())
                this.blog = doc.data()
                this.blog.id = doc.id
            });
        })
    }
}
</script>

<style>

</style>
