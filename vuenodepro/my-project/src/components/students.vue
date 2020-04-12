<template>
    <div>
        <p v-for="student in students">{{student.name}}-->{{student.experience}}</p>
    </div>
</template>

<script>
export default {
  
  data () {
      return{
          students:[
              {name:'Jim',experience:'2'},
              {name:'Rob',experience:'8'},
              {name:'Tom',experience:'9'},
              {name:'Sam',experience:'12'},
          ]
    }
  },
  methods:{

  },
}
</script>

<style>
h1{
    color:red;
}
</style>
