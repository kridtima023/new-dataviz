<template>
    <div>
 
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name : 'Readmore',
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
}
</script>

<style>

</style>
