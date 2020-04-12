<template>
    <div>
    <h1>Heading from the demo component</h1>
  <p v-for="student in students">{{student}}</p>
    </div>
</template>

<script>
export default {
  
  data () {
    return {
      students:['Tom','John','Rob'],
    }
  }
}
</script>

<style>
h1{
    color:red;
}
</style>
