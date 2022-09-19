<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Publisher Book</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Publisher Records</h1>
          <router-link to="/add-librarian" class="btn btn-dark" exact
            >Add Publisher</router-link
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
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";

export default {
  name: "PublisherPage",
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      fields: [
        { key: "PublisherID", label: "Publisher ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "Location", label: "Location", sortable: true },
      ],
      items: {
        PublisherID: null,
        Firstname: null,
        Middlename: null,
        Lastname: null,
        Location: null,
      },
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  components: { SidebarComponent },
};
</script>
<style scope>
.nav {
  float: left;
}
.main {
  float: right;
  width: 85%;
  margin-top: 20px;
}
.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
  margin-bottom: 40px;
  display: flex;
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
}
.content {
  width: 90%;
  margin-left: 80px;
}
</style>