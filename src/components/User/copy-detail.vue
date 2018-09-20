<template>
    <div>
        <download-excel :data= "blogs" v-on:click="show()">Download Data</download-excel>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
name : 'Detail',
data(){
    return {
        blogs: [],
        show(){
        db.collection('blogs').get().then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data(), doc.id)
                let blog = doc.data()
                blog.id = doc.id
                this.blogs.push(blog)
            });
        })
        
    }
}
    }
}

</script>

<style>

</style>
