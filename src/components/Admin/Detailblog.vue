<template>
  <div>
    <b-card class="add mb-3"  v-if="blog" :key="blog.id">
      <div class="add mb-3" >
        <img blank blank-color="#ccc" width="600" height="450"  :src="blog.imagepreview"/>
      </div>
        
      <b-media>
        <b-media-body class="ml-3">
          <h4>{{blog.title}}</h4>
          <h6>
            {{blog.description}}
          </h6>
            {{blog.selected}}
              <div class="small">
                <bar v-if="blog.selected == 'bar'"></bar>
                <line-chart v-if="blog.selected == 'line'"></line-chart>
              </div>
        
          <router-link :to="{ name : 'Overviews'}"><b-button variant="success">Back</b-button></router-link>
        </b-media-body>
      </b-media>
    </b-card>

  </div>
</template>

<script>
import db from "@/firebase/init";
import Bar from "../Chart/BarChart.js";
import LineChart from "../Chart/LineChart.js";
export default {
  name: "Detailblog",
  components: { Bar, LineChart },

  data() {
    return {
      blog: []
    };
  },
  // created(){
  //     db.collection('blogs').get().then(snapshot => {
  //         snapshot.forEach(doc => {
  //             console.log(doc.data())
  //             // let blog = doc.data()
  //             // blog.id = doc.id
  //             // this.blogs.push(blog)
  //             // this.blogs.push(doc.data())
  //         });
  //     })
  // },
  created() {
    let ref = db
      .collection("blogs")
      .where("slug", "==", this.$route.params.detail_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        this.blog = doc.data();
        this.blog.id = doc.id;
      });
    });
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 100px auto;
}
.img {
  text-align: center;

  
}
</style>
