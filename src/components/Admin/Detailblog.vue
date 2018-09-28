<template>
    <div>
        <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="450" height="300" alt="placeholder" />
        </b-media-aside>
        <b-card v-for="blog in this.blogs" :key="blog.id">
        <b-media no-body >
        <b-media-body class="ml-3">
        
        <h5 class="mt-0">{{blog.blog.title}}</h5>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
        in faucibus.
        </p>
        
        </b-media-body>
        </b-media>
        </b-card>

    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name : 'Detailblog',
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
}
</script>

<style>

</style>
