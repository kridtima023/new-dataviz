<template>
  <div id="app">
        <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link :to="{ name :'Navbar'}">
        <b-navbar-brand href="#">PTEI Visualization</b-navbar-brand>
    </router-link>
    

    <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <router-link :to="{ path: '/sign-in' }">
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Sign In</b-button>
        </router-link>
      </b-nav-form>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
<!-- navbar-1.vue -->
<div>
  <b-img :src="image" fluid-grow   alt="Responsive image" />
</div>



    <router-view></router-view>

<!-- Footer -->
   <div  class="card-footer text-muted bg-dark text-white" >

<b-container fluid class="bv-example-row text-white">
    <b-row>
        <b-col sm="5" md="6">             
            <div class="card-body ">
                <h5 class="card-title">ABOUT US</h5>
                <h4></h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <hr>
            <div class="card-body">
                <h5 class="card-title">HOT TAG</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <b-button variant="success">#PHUKET</b-button>
                <b-button variant="warning">#TRAVEL</b-button>
                <b-button variant="primary">#TOURISM</b-button>
            </div>
            
        </b-col>
        <b-col sm="5" md="6">            
            <div class="card-body">
                <h5 class="card-title">POPULAR</h5>
                <b-media>
                    <b-img slot="aside" blank blank-color="#ccc" width="120" alt="placeholder" />
                        <h5>Nested Media</h5>
                        <p>
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                            congue felis in faucibus.
                        </p>
                </b-media> 
            
            <hr>
                <b-media>
                    <b-img slot="aside" blank blank-color="#ccc" width="120" alt="placeholder" />
                        <h5>Nested Media</h5>
                        <p>
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                            congue felis in faucibus.
                        </p>
                </b-media> 
            
            <hr>
                <b-media>
                    <b-img slot="aside" blank blank-color="#ccc" width="120" alt="placeholder" />
                        <h5>Nested Media</h5>
                        <p>
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                            congue felis in faucibus.
                        </p>
                </b-media> 
            </div>
            
        </b-col>
    </b-row>
</b-container>



</div>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/User/Navbar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navbar
  },
  data(){
    return{
      image: require('@/assets/PTEIHEAD.png')
    }
  }
}
</script>

<style>
#app {
  font-family: Calibri;
  font-size: 20px;
  text-align: auto;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
