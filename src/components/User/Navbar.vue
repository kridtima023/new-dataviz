<template>
   <div>
    <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link :to="{ name :'Navbar'}">
        <b-navbar-brand href="#">PTEI Visualization</b-navbar-brand>
    </router-link>
    

    <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <router-link :to="{ name : 'Signin' }">
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Sign In</b-button>
        </router-link>
      </b-nav-form>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
<!-- navbar-1.vue -->

<div>
    
  <b-img :src="image"  alt="Responsive image" fluid-grow/>
</div>

<b-nav-form class="search" center>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="info ">Search</b-button>
</b-nav-form>
<!-- ------------------------------------------------------------------------------------------------------------------- -->
<!-- Page index -->
<Index/>

<!-- ------------------------------------------------------------------------------------------------------------------- -->



   </div>
</template>

<script>
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
    margin-top: 10px ;
    margin-bottom: 10px ;
    
}
</style>
