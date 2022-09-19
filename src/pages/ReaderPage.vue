<template>
  <b-container fluid id="lib">
    <div class="nav">
      <MySidebar />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Reader</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Reader Records</h1>
          <router-link to="/add-librarian" class="btn btn-dark" exact
            >Add Reader</router-link
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
import MySidebar from "../components/MySidebar.vue";

export default {
  name: "ReaderPage",
  component: {
    MySidebar,
  },
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      filter: "",
      fields: [
        { key: "ReaderID", label: "Reader ID", sortable: true },
        { key: "ReaderNo", label: "Reader No", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "Birthdate", label: "Birthdate", sortable: true },
        { key: "Gender", label: "Gender", sortable: true },
        { key: "RegisterDate", labe: "Register ate", sortable: true },
        { key: "ContactNo", label: "ContactNo", sortable: true },
        { key: "Status", label: "Status", sortable: true },
        { key: "CityID", label: "CityID", sortable: true },
      ],
      items: {
        ReaderID: null,
        ReaderNo: null,
        Firstname: null,
        Middlename: null,
        Lastname: null,
        Birthdate: null,
        Gender: null,
        RegisterDate: null,
        ContactNo: null,
        Status: null,
        CityID: null,
      },
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>
<style scope>
.nav {
  float: left;
}
.main {
  float: right;
  width: 80%;
  margin-top: 20px;
}
.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
  margin-bottom: 40px;
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
