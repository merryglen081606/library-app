<template>
  <body>
    <b-container fluid id="lib">
      <div class="nav">
        <SidebarComponent />
      </div>

      <div class="main">
        <div class="head">
          <h4>Library System/<span> Home</span></h4>
          <!-- <h4 v-if="!user" class="user">You are not yet recognized</h4>
          <h3 v-if="user">{{ user.Username }} {{ user.Password }}</h3> -->
        </div>
         <div class="box">
              <h1>Number</h1>
         </div>
      </div>
    </b-container>
  </body>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import axios from "axios";

export default {
  name: "HomeVue",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("user");
    this.user = response.data;
  },

  components: { SidebarComponent },
};
</script>
<style scope>
.nav {
  float: left;
}
body {
  background-color: #e4e9f7;
  width: 100%;
}
</style>
