<template>
   <div>
    



<b-nav-form class="search" center>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="warning">Search</b-button>
</b-nav-form>
<!-- ------------------------------------------------------------------------------------------------------------------- -->
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
