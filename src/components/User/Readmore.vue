<template>
    <div>
      <b-img  blank blank-color="#ccc" width="450" height="300" alt="placeholder" />


      
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
        in faucibus.
        </p>
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
