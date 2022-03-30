<template>
  <div class="home">

     <div> 我是vue1工程</div>
    <el-button @click="dialogVisible = true" type="text">Open Dialog</el-button>
     <!-- <about></about> -->
  </div>

</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
// import about from 'xwtest2';
  export default {
    name: 'home',
    components: {
      // about,
      HelloWorld,
    },
    data() {
      return {
        dialogVisible: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Sure to close？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
    },
  };
</script>
