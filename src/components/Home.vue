<template>
  <div>
    Home
  </div>
</template>

<script>
  import {loadHomeMessage} from "@/network/home";

  export default {
    name: "Home",
    created() {
      loadHomeMessage().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
  }
</script>

<style scoped>

</style>