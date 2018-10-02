<template>
    <div>
        <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="450" height="300" alt="placeholder" />
        </b-media-aside>
        <b-card v-if="blog" :key="blog.id">
        <b-media no-body >
        <b-media-body class="ml-3">
        
        <h5 class="mt-0">{{blog.title}}</h5>
        <p>
            {{blog.description}}
        </p>
         {{blog.selected}}
        <div class="small">
        <bar v-if="blog.selected == 'bar'"></bar>
        <line-chart v-if="blog.selected == 'line'"></line-chart>
        </div>

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
  name: "Readmore",
  components: { Bar, LineChart },

  data() {
    return {
      blog: null
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
</style>
