<template>
  <section>
    <div  
      @keyup.shift.tab = "tabKey(-1)"
      @keyup.tab = "tabKey(1)" 
    >
      <br>Tabs event work only with 2 inputs
      <br><input v-model="inputData" >
      <br><input v-model="inputData2" >
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'; 
export default {
  name: 'editControl',
  data(){
    return{
      inputData:0,
      inputData2:0,
    }
  },
  props:{},
  computed:{},  
  methods:{
    tabKey(v){
      //console.log("EditControl tabKey",v)
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
  #border:1px solid grey;
  cursor:pointer;
}

.num:hover{
  color:blue
}

</style>