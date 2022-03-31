<!-- 1子服务主体 -->
<template>
  <div class="home">

     <div> 我是vue1工程</div>
    <el-button @click="dialogVisible = true" type="text">Open Dialog</el-button>
     <about></about>
  </div>

</template>

<script>
import {about} from 'xwtest2';

  export default {
    name: 'home',
    components: {
      about,
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
