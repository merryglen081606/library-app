<template>
  <b-container fluid id="lib">
    <div class="nav">
      <MySidebar />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Author</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Librarian Records</h1>
          <router-link to="/add-librarian" class="btn btn-dark" exact
            >Add Author</router-link
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
          >
          </b-table>

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
  name: "AuthorPage",
  component: {
    MySidebar,
  },
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      filter: "",
      fields: [
        { key: "AuthorID", label: "Author ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],
      items: [
        {
          isActive: true,
          AuthorID: 40,
          Firstname: "Dickerson",
          Middlename: "Mald",
          Lastname: "Macdonald",
        },
        {
          isActive: true,
          AuthorID: 40,
          Firstname: "Dickerson",
          Middlename: "Mald",
          Lastname: "Macdonald",
        },

        {
          isActive: true,
          AuthorID: 40,
          Firstname: "Dickerson",
          Middlename: "Mald",
          Lastname: "Macdonald",
        },
        {
          isActive: true,
          AuthorID: 40,
          Firstname: "Dickerson",
          Middlename: "Mald",
          Lastname: "Macdonald",
        },
        {
          isActive: true,
          AuthorID: 40,
          Firstname: "Dickerson",
          Middlename: "Mald",
          Lastname: "Macdonald",
        },

        {
          isActive: true,
          AuthorID: 40,
          Firstname: "Dickerson",
          Middlename: "Mald",
          Lastname: "Macdonald",
        },
      ],

      //items: {
      //AuthorID: null,
      //Firstname: null,
      //Middlename: null,
      //Lastname: null,
      // },
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
  width: 100%;
  margin-left: 80px;
}
.btn {
  margin-bottom: 10px;
}
</style>