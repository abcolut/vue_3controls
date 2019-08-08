<template>
  <section>
    <div class = "controlTitle" @click = "activateThisControl()">
      <span class = "num"> {{val}} </span>  
      <img src = "@/assets/v.png" class = "check_the_box">
    </div> 
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'; 
  export default {
    name: 'controlTitle',
    data(){
      return{
        inputData: 0,
      }
    },
    props:{
      nom: Number,
    },
    computed:{ 
      val:{
        get(){
          if (this.nom == 1) return this.$store.getters["getVal1"]
          if (this.nom == 2) return this.$store.getters["getVal2"]
          if (this.nom == 3) return this.$store.getters["getVal3"]
        },
      },
    },  
    methods:{
      activateThisControl(){
      this.$store.commit("setId", this.nom)
      this.$emit("resetVal")
    },
  }
}
</script>

<style scoped>
.check_the_box{
  padding-top:3px;
}
.controlTitle{
  font-size:large;
  width:400px;
  text-align:left;
  cursor:pointer;
}
.num:hover{
  color:blue
}

</style>