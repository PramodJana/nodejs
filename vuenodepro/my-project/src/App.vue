<template>
 
  <div>
     <h1> {{newMessage}}</h1>
      <students></students>
  </div>

</template>

<script>
export default {
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
