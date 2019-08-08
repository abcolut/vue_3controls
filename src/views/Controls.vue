<template>
  <section 
    @click = "reset()" 
    @keyup.escape = "reset()" 
  >
  <h3>Three crazy controls. VUE subtlety test</h3>
  <div class="title">Control 1 </div>

  <control 
    :nom = 1 
    :active = "show1" 
    :command = "'Sum'"
    ref = "e1"
    @controlAction = "controlAction()"
    class = "control"
  />
  <div class=clear></div>
  <br>    
  <div class="title">Control 2 </div>

  <control 
    :nom = 2 
    :active = "show2" 
    :command = "'Constant'"
    ref = "e2"
    @controlAction = "controlAction()"
    class = "control"
  />
  <div class="clear"></div>

  <br>
  <div class="title">Control 3 </div>

  <control 
    :nom = 3 
    :active = "show3" 
    :command = "''"
    class = "control"
    ref = "e3"
    @controlAction= "controlAction()"
  />
  <div class=clear></div>
  <h4>State of VUEX variables</h4>
  <br> val1: {{ _val1 }} 
  <br> val2: {{ _val2 }} 
  <br> val3: {{ _val3 }}
  <br> id: {{ _id }}
  <br> 
</section>
</template>


<script>
  import {mapGetters} from 'vuex'; 
  import control from '../components/Control.vue'
  //import controlTitle from '../components/ControlTitle.vue'
  //import editControl from '../components/editControl.vue'

  export default {
    name: 'controls',
    components:{ control },
    data(){
      return{
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      }
    },
    computed:{ 
      ...mapGetters({ _val1: 'getVal1' }),
      ...mapGetters({ _val2: 'getVal2' }),
      ...mapGetters({ _val3: 'getVal3' }),
      ...mapGetters({ _id: 'getId' }),
    },
    methods:{
      tabKey(v){
      },

    reset(){
      this.$store.commit("setId", null)
    },
    controlAction(json){
        this.$refs.e1.resetVal()
        this.$refs.e2.resetVal()
        this.$refs.e3.resetVal()
    }
  }
}
</script>

<style scoped>
.control{
  float: left;
}
.title{
  font-size: large;
  float: left;
  margin-right: 30px;
  padding: 3px;
  height: 50px;  
}
.clear{
  clear: both;
}
</style>