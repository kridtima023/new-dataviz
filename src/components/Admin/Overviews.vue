<template>
    <div>
        <b-card v-for="blog in this.blogs" :key="blog.id">
        <b-media no-body >
            <i @click="deleteblog(blog.id)">delete</i>
            <b-button><router-link :to="{name:'Editblog', params: {edit_slug: blog.slug}}">
                Edit
                </router-link></b-button>
        
       


        <b-media-aside vertical-align="center">
            <img blank blank-color="#ccc" width="450" height="300" alt="placeholder" :src="blog.imagepreview"/>
        </b-media-aside>
   
        <b-media-body class="ml-3">
            <b-media-body>
            <h5 class="mt-0 mb-1">{{blog.title}}</h5>
                <p>
                    {{blog.description}}
                </p>       

        <div>
           
                
    <router-link :to="{name : 'Detailblog', params: {detail_slug : blog.slug}}">
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Read More </b-button>
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
    name : 'Overviews',
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
    },
    methods: {
        deleteblog(id){
            db.collection('blogs').doc(id).delete().then(() =>{
                this.blogs = this.blogs.filter(blog => {
                    return blog.id != id
                })
            })
        }
    }
}
</script>

<style>

</style>
