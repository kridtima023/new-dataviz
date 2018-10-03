<template>
   <div>
<!-- Page index -->
<Index/>
<b-pagination class="active" size="md" :total-rows="100"  :per-page="10"> </b-pagination>

   </div>
</template>

<script>
import firebase from "@/firebase/init"
import Index from '../User/Index.vue'

export default {
    name : 'Navbar',
    components :{Index},
    data() {
        return {
            image: require('@/assets/PTEIHEAD.png')
        }
    }
    }

</script>

<style>
.search{

    margin-top: 30px ;
    margin-bottom: 10px ;
    margin-left: 100px;
    
}
.pagination {
    margin-top: 30px ;
    margin-left: 100px;
}


</style>
