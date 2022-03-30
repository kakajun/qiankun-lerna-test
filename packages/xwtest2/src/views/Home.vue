<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"/> -->
    <HelloWorld msg="Vue.js Demo"/>

    <el-button @click="dialogVisible = true" type="text">Open Dialog</el-button>
<about1></about1>
    <el-dialog
      :before-close="handleClose"
      :visible.sync="dialogVisible"
      title="Dialog"
      width="30%">
      <span>dialog message</span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">cancel</el-button>
        <el-button @click="dialogVisible = false" type="primary">ok</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue';
import {about1} from 'xwtet1';
console.log(about1,"gggg");
  export default {
    name: 'home',
    components: {
      about1,
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
