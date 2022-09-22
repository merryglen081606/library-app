<template>
  <body>
    <div>
      <b-row id="header" class="d-flex fixed-top justify-content-center">
        <b-navbar type="dark" variant="dark">
          <a
            class="navbar-brand"
            style="
              font-size: 30px;
              font-weight: bolder;
              font-family: montserrat;
              color: #ffffff;
              padding-left: 210px;
            "
            href="#"
            >Lou Geh<span style="color: #eeb34b; font-family: montserrat">
              Library System</span
            ></a
          >
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 bg-dark">
              <li class="nav-item">
                <router-link to="/" class="nav-link" exact>Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/search" class="nav-link" exact
                  >Search</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link to="/login" class="nav-link" exact
                  >Login</router-link
                >
              </li> -->
              <li class="nav-item">
                <router-link
                  to="/login"
                  class="btn btn-outline-success"
                  role="button"
                  style="
                    font-family: montserrat;
                    font-size: 20px;
                    font-weight: 900;
                    border-radius: 30px;
                    color: #ffffff;
                    padding-right: 20px;
                    padding-left: 20px;
                  "
                  exact
                  >LOGIN ACCOUNT</router-link
                >
              </li>
            </ul>
          </div>
        </b-navbar>
      </b-row>
      <b-form-fieldset class="search-bar">
        <b-icon
          class="icon-search"
          icon="search"
          animation="fade"
          font-scale="3"
        />
        <b-input
          class="search-input"
          v-model="filter"
          placeholder="Search Books..."
        ></b-input>
      </b-form-fieldset>

      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Book Information</h1>
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
  </body>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
      fields: [
        { key: "ISBN", label: "ISBN", sortable: true },
        { key: "BookTitle", label: "Book Title", sortable: true },
        { key: "AuthorID", label: "Author", sortable: true },
        { key: "PageNo", label: "Page No.", sortable: true },
        { key: "YearPiblish", label: "Year Piblish", sortable: true },
        { key: "PublisherID", labe: "Publisher", sortable: true },
        { key: "CategoryID", label: "Category", sortable: true },
      ],
      items: [
        {
          isActive: true,
          ISBN: "Dick",
          BookTitle: "Macdon",
          AuthorID: "Mac",
          PageNo: "578",
          YearPiblish: "1967",
          Publisher: "576",
          CategoryID: "587",
        },
        {
          isActive: true,
          BookID: 2,
          ISBN: "Di",
          BookTitle: "Mald",
          AuthorID: "Macdonald",
          PageNo: "57",
          YearPiblish: "1957",
          PublisherID: "57",
          CategoryID: "57",
        },
        {
          isActive: false,
          BookID: 3,
          ISBN: "Dickerson",
          BookTitle: "Macdonald",
          AuthorID: "Macdonald",
          PageNo: "57",
          YearPiblish: "1957",
          PublisherID: "57",
          CategoryID: "57",
        },
        {
          isActive: true,
          BookID: 4,
          ISBN: "Dickerson",
          BookTitle: "Macdonald",
          AuthorID: "Macdonald",
          PageNo: "57",
          YearPiblish: "1957",
          PublisherID: "57",
          CategoryID: "57",
        },
      ],
      perPage: 10,
      currentPage: 1,
      filter: "",
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: grid;
  height: 100vh;
  place-items: center;
  background-image: url(../../src/assets/image/image18.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.main_div {
  width: 365px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 140px;
}
.main_div .title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}

.navbar {
  background-color: #ffffff;
  height: 75px;
}
.nav-item {
  padding-right: 40px;
  justify-content: center;
}
.nav-item .nav-link {
  font-family: montserrat;
  font-size: 20px;
  font-weight: 900;
  padding-left: 40px;
  padding-right: 40px;
  color: #ffffff;
}
/* .nav-item .nav-link:hover {
  color: #c99811;
} */
/* .search-input {
  height: 690px;
  padding-top: 40px;
}
.search-input .search {
  height: 50px;
  width: 720px;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  position: relative;
} */
.search-bar {
  padding: 5px;
  margin-bottom: 90px;
  background-color: #023047;
  height: 90px;
  border-radius: 50px;
  width: 900px;
  justify-content: center;
}
.search-input {
  border-radius: 50px;
  height: 50px;
  margin-top: 12px;
  width: 800px;
  margin-left: 10px;
}
.icon-search {
  color: #eeb34b;
  float: right;
  margin-right: 20px;
}
h1 {
  margin-bottom: 30px;
}
</style>