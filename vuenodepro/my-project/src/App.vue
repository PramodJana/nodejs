<template>
 
  <div>
     <h1> {{newMessage}}</h1>
      <heading></heading>
      <students></students>
  </div>

</template>

<script>
import heading from './components/heading.vue'
import students from './components/students.vue'
export default {
  components:{
    'heading':heading,
    'students':students,
  },
  name: 'app',
  data () {
    return {
      newMessage:'Hello There!'
    }
  }
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
