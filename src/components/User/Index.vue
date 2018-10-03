<template>
    <div>
        <b-card class="card mb-3"  v-for="blog in this.blogs" :key="blog.id">
            <b-media no-body>
                <b-media-aside vertical-align="center">
                    <b-img blank blank-color="#ccc" width="450" height="300" alt="placeholder" />
                </b-media-aside>
   
                <b-media-body class="ml-3">
                    <b-media-body>
                        <h4 class="mt-0 mb-1">{{blog.title}}</h4>
                        <h6>
                            {{blog.description}}
                        </h6>       

                        <div>           
                            
                                <router-link :to="{name : 'Readmore', params: {detail_slug : blog.slug}}">
                                    <button size="sm" class="button" style="vertical-align:middle" type="submit" ><span>Read More</span></button>
                                    
                                </router-link>
                                       
                        </div>
                    </b-media-body>  
                 </b-media-body>
    
            </b-media>
        </b-card>
        <!-- media-2.vue -->
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name : 'Index',
    data(){
        return{
            blogs : []
        }
    },
    created(){
        db.collection('blogs').get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data())
                let blog = doc.data()
                blog.id = doc.id
                this.blogs.push(blog)
                // this.blogs.push(doc.data())
            });
        })
    }
    
}
</script>

<style>


.card {
  text-align: left;
  max-width: 800px auto;
  margin-top: 30px;
  margin-right: 100px;
  margin-left: 100px;
  
}
.button {
  display: inline-block;
  border-radius: 50px;
  background-color: #df75a6;
  border: none;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 15px;
  padding: 0px;
  width: 130px;
  height: 40px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


</style>
