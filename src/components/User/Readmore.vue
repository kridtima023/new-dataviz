<template>
  <div >  


<!-- readmore -->
        
    <b-card class="form mb-3"  v-if="blog" :key="blog.id">
      <b-media-aside >
        <b-img center blank blank-color="#ccc" width="450" height="300" />
      </b-media-aside>

      <b-media >
        <b-media-body>
          <h4 class="mt-0">{{blog.title}}</h4>
          <h6>
            {{blog.description}}
          </h6>
            {{blog.selected}}
              <div class="small">
                <bar v-if="blog.selected == 'bar'"></bar>
                <line-chart v-if="blog.selected == 'line'"></line-chart>
                <doughnut v-if="blog.selected =='doughnut'"></doughnut>
                <pie v-if="blog.selected =='pie'"></pie>
                <radar v-if="blog.selected =='radar'"></radar>
                <polar-area v-if="blog.selected =='polar'"></polar-area>
                <bubble v-if="blog.selected =='bubble'"></bubble>
                <horizaontal-bar v-if="blog.selected =='horizontal'"></horizaontal-bar>
              </div>
        </b-media-body>
      </b-media>
    </b-card>

    <!-- footer -->




</div>


  
</template>

<script>
import db from "@/firebase/init";
import Bar from "../Chart/BarChart.js";
import LineChart from "../Chart/LineChart.js";
import Doughnut from '../Chart/DoughnutChart.js'
import Pie from '../Chart/PieChart.js'
import Radar from '../Chart/RadarChart.js'
import PolarArea from '../Chart/PolarChart.js'
import Bubble from '../Chart/BubbleChart.js'
import HorizontalBar from '../Chart/HorizontalChart.js'

export default {
  name: "Readmore",
  components: { Bar, LineChart, Doughnut, Pie, Radar, PolarArea, Bubble, HorizontalBar},

  data() {
    return {
      image: require('@/assets/PTEIHEAD.png'),
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
.form {
  text-align: center;
  max-width: 800px auto;
  margin-top: 30px;
  margin-right: 100px;
  margin-left: 100px;
  
}

</style>
