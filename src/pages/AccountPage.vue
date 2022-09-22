<template>
<body>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Account</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Account Records</h1>
          <router-link to="/add-librarian" class="btn btn-dark" exact
            >Add Account</router-link
          >
          <b-form-fieldset
            style="float: right; padding-bottom: 10px"
            class="col-4"
          >
            <b-input v-model="filter" placeholder="search..."></b-input>
          </b-form-fieldset>

          <b-table
            responsive
            striped
            bordered
            hover
            id="my-table"
            :items="items"
            :filter="filter"
            :fields="fields"
            primary-key
            label-sort-asc=""
            label-sort-desc=""
            label-sort-clear=""
            :per-page="perPage"
            :current-page="currentPage"
          ></b-table>
          <b-pagination
            v-model="currentPage"
            pills
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
        </b-card>
      </div>
    </div>
  
  </b-container>
</body>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "AccountPage",

  data() {
    return {
      rows: 100,
      currentPage: 1,
      filter: "",
      fields: [
        { key: "AccountID", label: "Account ID", sortable: true },
        { key: "Username", label: "Username", sortable: true },
        { key: "Password", label: "Password", sortable: true },
        { key: "UserID", label: "User ID", sortable: true },
        { key: "Roles", label: "Roles", sortable: true },
        { key: "Status", label: "Status", sortable: true },
      ],
      items: {
        AccountID: null,
        Username: null,
        Password: null,
        UserID: null,
        Roles: null,
        Status: null,
      },
    };
  },
  components: {SidebarComponent},
};
</script>
<style scope>
.nav {
  float: left;
  
}
body{
  background-color: #E4E9F7;
  width: 100%;
}
/*
.main {
  float: right;
  width: 100%;
  margin-top: 20px;
  background-color: #E4E9F7;
  height: 100vh;
}

.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
}
.main .head h4 {
  font-family: montserrat;
  color: rgb(240, 240, 240);
  padding-top: 10px;
  padding: 15px;
}
.main h4 span {
  color: #eeb34b;
  font-family: montserrat;
}
.button {
  padding: 50px;
}
.button .btn {
  width: auto;
}

.main h5 {
  text-align: center;
  padding-top: 20px;
}
h1 {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: #11101d;
}*/

</style>