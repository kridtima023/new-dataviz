<template>
    <div>
        <b-card class="card border-success mb-3"  v-for="blog in this.blogs" :key="blog.id">
            <b-media no-body>
                <b-media-aside vertical-align="center">
                    <b-img blank blank-color="#ccc" width="450" height="300" alt="placeholder" />
                </b-media-aside>
   
                <b-media-body class="ml-3">
                    <b-media-body>
                        <h5 class="mt-0 mb-1">{{blog.title}}</h5>
                        <p>
                            {{blog.description}}
                        </p>       

                        <div>           
                            <b-button size="sm" class="my-2 my-sm-0" type="submit" >
                                <router-link :to="{name : 'Readmore', params: {detail_slug : blog.slug}}">Read More...</router-link>
                            </b-button>           
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
</style>
