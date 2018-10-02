<template>
    <div >
        <b-img :src="imagepreview" class="preview-image" v-on:click="openupload" alt="Responsive image" />
        <input type="file" name="image" id="file-filed" v-on:change="updatepreview">
        <button>
            <i class="fa fa-upload" @click="upload">Upload</i>
        </button>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
 data(){
     return{
            imagepreview : require('../../assets/Upload.png'),
            file : null 
           
     }
 },
 methods : {
     openupload(){
         document.getElementById('file-filed').click()
     },
     updatepreview(e){
         var reader, files = e.target.files 
         if(files.length == 0 ){
             console.log('empty')
         }
         reader = new FileReader()
         reader.onload = (e) => { 
             this.imagepreview = e.target.result
         }
         reader.readAsDataURL(files[0])

         db.collection('blogs').add({
            imagepreview : this.imagepreview
         })
         console.log(this.imagepreview)
     },
     upload(){
        //    db.collection('blogs').add({
        //      imagepreview : this.imagepreview
        //  }).then(() =>{
        //      console.log(this.imagepreview)
        //  })
     }
 }
}
</script>

<style>
.preview-image{
  cursor:pointer;
  width: 500px; 
  height: 500px;
  border-style: solid; 
  border-color: #000000 #000000; 
  border-width: medium;
}
</style>
