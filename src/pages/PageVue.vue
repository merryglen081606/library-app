

  <template>
    <b-container fluid id="lib">
      <div class="nav">
        <SidebarComponent />
      </div>
      <div class="main">
        <div class="head">
          <h4>Library System/<span>Librarian</span></h4>
        </div>
       
      </div>
    </b-container>
  </template>
  
  <script>

  import SidebarComponent from "../components/SidebarComponent.vue";
  
  export default {
    name: "PageVue",
  
 
  
    components: { SidebarComponent },
  };
  </script>
  
  <style scope>
  
  </style>
  