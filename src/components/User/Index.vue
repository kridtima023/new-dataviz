<template>
    <div>
        <b-card v-for="blog in blogs" :key="blog.id">
        <b-media no-body >
            <!-- <i @click="deleteblog(blog.id)">delete</i> -->
        <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="450" height="300" alt="placeholder" />
         </b-media-aside>
        
        
         <b-media-body class="ml-3">
        
        <h5 class="mt-0">{{blog.title}}</h5>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
        in faucibus.
        </p>
        

        <div>
            <router-link :to="{ name : 'Readmore' }">
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Read More...</b-button>
            </router-link>
            <!-- <b-button size="sm" >Read More...</b-button> -->
        </div>
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
    },created(){
        db.collection('blogs').get().then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data(), doc.id)
                let blog = doc.data()
                blog.id = doc.id
                this.blogs.push(blog)
            });
        })
    },
    // methods: {
    //     deleteblog(id){
    //         db.collection('blogs').doc(id).delete().then(() =>{
    //             this.blogs = this.blogs.filter(blog => {
    //                 return blog.id != id
    //             })
    //         })
    //     }
    // }
}
</script>

<style>

</style>
