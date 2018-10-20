<template>
    <div>
        <b-card class="card mb-3"  v-for="blog in this.blogs" :key="blog.id" >

            <button type="button" class="close" aria-label="Close"  >                
                <img @click="deleteblog(blog.id)" src="../../assets/delete.png" width="30" height="25" />                
            </button>
       
      
      
    
            <button type="button" class="close" aria-label="Close">
                <router-link :to="{name:'Editblog', params: {edit_slug: blog.slug}}">
                    <img  src="../../assets/edit.png" width="25" height="25"/>
                </router-link>
            </button>


            <b-media no-body >
        
                <b-media-aside vertical-align="center">
                    <img blank blank-color="#ccc" width="450" height="300" alt="placeholder" :src="blog.imagepreview"/>
                </b-media-aside>  


                <b-media-body class="ml-3">
                    <b-media-body>
                        <h4 class="mt-0 mb-1">{{blog.title}}</h4>
                        <h6>
                            {{blog.description}}
                        </h6>     

                        <div>
                           
                            <router-link :to="{name : 'Detailblog', params: {detail_slug : blog.slug}}">
                                <button size="sm" class="button" style="vertical-align:middle" type="submit"><span>Read More </span></button>
                            </router-link>
                              
                        </div>



                    </b-media-body>
                </b-media-body>
    
            </b-media>
           
        </b-card>

        
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
            alert('Are you sure?')
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

.card {
  text-align: left;
  max-width: 800px auto;
  margin-top: 30px;
  margin-right: 100px;
  margin-left: 100px;
  
  
}
.button {
  display: inline-block;
  border-radius: 50px;
  background-color: #df75a6;
  border: none;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 15px;
  padding: 0px;
  width: 130px;
  height: 40px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.picture {
  margin-right: 100px;
}



</style>
