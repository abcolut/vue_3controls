<template>
  <section>
    <div    
      @keydown="keyDownFunc"
      @click.stop>
    <controlTitle 
      :nom = nom 
      v-if = "id != nom" 
      @resetVal = "resetVal"  
      @controlAction = "controlAction"  
    />
    <div v-else> 
      <input type = "text" class = "inputPusto" />
      <input 
        type = "number" 
        v-model = "inputData" 
        size = 7 
        ref = "inputData"
      />
      <div @click.stop = "doCommand()" class = "command"> 
        {{command}} 
      </div>   
      <input type = "text" class = "inputPusto"  />
    </div>
  </div>
  </section>
</template>

<script>
import controlTitle from '../components/ControlTitle.vue'
import {mapGetters} from 'vuex'; 
export default {
  name: 'control',
  components:{ controlTitle },
  data(){
    return{
      inputData: 0,
      prevKey: null,
      flagStopOperation: false,
    }
  },
  props:{
    nom: Number,
    active: Boolean,
    command: String,
  },
  computed:{ 
     //...mapGetters({val1:'getVal1'}),
     ...mapGetters({val2: 'getVal2'}),
     ...mapGetters({val3: 'getVal3'}),
     ...mapGetters({id: 'getId'}),
  },
  watch:{
    inputData(data){
      if (this.flagStopOperation) return
      this.inputData = Number(this.inputData)
      if (this.inputData < 0) this.inputData = 0;
      if ((this.nom == 2) ){
        this.$store.commit("setVal", {nom:3, val:this.inputData})
      }
      if ((this.nom == 3) ){
        this.$store.commit("setVal", {nom:2, val:this.inputData})
      }
    }
  },
  methods:{
    resetVal(){
      this.inputData = 0 
      this.prevKey = null   
      this.flagStopOperation = false;

      setTimeout( ()=>{
        if (this.$refs.inputData != null){
          this.$refs.inputData.focus()
        }
      },100 )      
    },
    keyDownFunc: function(event) {
        if ((this.prevKey == 16) && (event.keyCode == 9)){
          // shift - tab
          this.$store.commit("ChangeId", -1)
          this.$emit("controlAction")   
          this.flagStopOperation = true;  
          this.$refs.inputData.focus()    
          return
        }
        if ((this.prevKey != 16) && (event.keyCode == 9)){
          // tab key
          this.$store.commit("ChangeId", 1) 
          this.$emit("controlAction")
          this.flagStopOperation = true; 
          this.$refs.inputData.focus()
          return
        }
        if (event.keyCode == 27){
          //esc
          this.$store.commit("setId", null)    
          this.$emit("controlAction")  
          this.flagStopOperation = true;         
          return
        }
        if (event.keyCode == 13){
          //enter
          this.$store.commit("setVal", {nom:this.nom,  val:this.inputData})
          this.$store.commit("setId", null)  
          return
        }
        this.prevKey = event.keyCode 
        //console.log("keyDownFunc key: " + event.key + ' ' + event.keyCode );
    },

    controlAction(){
      this.$store.commit("setId", this.nom)
    },
    doCommand(){
      if (this.command == "Sum"){
        this.inputData = this.val2 + this.val3
        this.$refs.inputData.focus()
      }
      if (this.command == "Constant"){
        this.inputData = 1000
        this.$refs.inputData.focus()
      }
    },
    change(v){
      //console.log(v, this.dig, this.nom)
      this.inputData = this.inputData + v
      if (this.inputData < 0) this.inputData = 0;
    },

  },  
  mounted(){
    this.resetVal()
  },
}
</script>

<style scoped>
input{
  font-size:large;
}
.inputPusto{
  width:1px;
  border: 0px solid white;
}
</style>