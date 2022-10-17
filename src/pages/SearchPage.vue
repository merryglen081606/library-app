<template>
  <body>
    <b-container  fluid class="body-container">
    <!-- <section fluid id="library"> -->
      <div class="navs">
        <a
          class="navbar-brand"
          style="
          font-size: 30px;
            font-weight: bolder;
            font-family: montserrat;
            color: #ffffff;
            padding-left: 70px;
            padding-top: 20px;
          "
          href="#"
          >Lou Geh<span
            style="color: #eeb34b; font-family: montserrat; padding-top: 20px"
          >
            Library System</span
          ></a
        >

        <nav>
          <ul>
            <li class="nav-item">
              <a
                ><router-link to="/" class="nav-link" exact
                  >Home</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                ><router-link to="/aboutpage" class="nav-link" exact
                  >About</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                ><router-link to="/search" class="nav-link" exact
                  >Search</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                ><router-link to="/login" class="nav-link" exact
                  >Login</router-link
                ></a
              >
            </li>
            <!-- <li class="nav-item">
                    <router-link to="/login" class="nav-link" exact
                      >Login</router-link
                    >
                  </li> -->
          </ul>
        </nav>
      </div>
      <!-- </section> -->
      <b-container   class="table-search fluid justify-content-center">

        <b-row class="container ">
          <b-container class="tebs">
            <div class="tbales ">
              <div class="tatblee">
              <h1>Book Records</h1>

              

              <b-form-fieldset style="float: right" class="col-4">
                <b-input
                  v-model="filter"
                  placeholder="Type here to Search..."
                ></b-input>
              </b-form-fieldset>
              <b-modal
                hide-footer
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Book Information"
              >
                <form ref="form" v-on:submit.stop.prevent="bookSubmit">
                  <!-- <FormInput label="Invoice Number" /> -->
                  <b-button
                    style="margin-left: 30px"
                    v-b-modal.modal-2
                    variant="secondary"
                    class="col-5"
                    >View Publisher</b-button
                  >
                  <b-modal
                    scrollable
                    id="modal-2"
                    hide-footer
                    class="d-flex justify-content-center"
                    size="lg"
                    title="Librarian List"
                  >
                    <b-form-fieldset
                      style="float: right; padding-bottom: 1px"
                      class="col-12"
                    >
                      <b-input
                        v-model="filterP"
                        placeholder="Type here to Search..."
                      ></b-input>
                    </b-form-fieldset>
                    <br /><br />
                    <b-table
                      class="my-3"
                      v-for="i in 1"
                      :key="i"
                      responsive
                      striped
                      bordered
                      hover
                      id="my-table"
                      :items="publishers"
                      :filter="filterP"
                      :fields="publishers"
                      primary-key
                      label-sort-asc=""
                      label-sort-desc=""
                      label-sort-clear=""
                      :per-page="per"
                      :current-page="Page"
                    ></b-table>
                    <!-- <b-pagination
                  v-model="Page"
                  pills
                  :total-rows="rows"
                  :per-page="per"
                  aria-controls="my-table1"
                ></b-pagination>

                <p class="currentpage">Current Page: {{ Page }}</p> -->
                  </b-modal>
                  <b-button
                    class="col-5"
                    style="margin-left: 2px"
                    v-b-modal.modal-3
                    variant="secondary"
                    >View Author</b-button
                  >
                  <b-modal
                    scrollable
                    id="modal-3"
                    hide-footer
                    class="d-flex justify-content-center"
                    size="lg"
                    title="Librarian List"
                  >
                    <b-form-fieldset
                      style="float: right; padding-bottom: 1px"
                      class="col-12"
                    >
                      <b-input
                        v-model="filterA"
                        placeholder="Type here to Search..."
                      ></b-input>
                    </b-form-fieldset>
                    <br /><br />
                    <b-table
                      class="my-3"
                      v-for="i in 1"
                      :key="i"
                      responsive
                      striped
                      bordered
                      hover
                      id="my-table1"
                      :items="authors"
                      :filter="filterA"
                      :fields="author"
                      primary-key
                      label-sort-asc=""
                      label-sort-desc=""
                      label-sort-clear=""
                      :per-page="per"
                      :current-page="Page"
                    ></b-table>
                    <!-- <b-pagination
                  v-model="Page"
                  pills
                  :total-rows="rows"
                  :per-page="per"
                  aria-controls="my-table1"
                ></b-pagination>

                <p class="currentpage">Current Page: {{ Page }}</p> -->
                  </b-modal>
                  <b-form-group label="ISBN" label-for="ISBN-input">
                    <b-form-input
                      placeholder="Enter Book ISBN"
                      id="ISBN-input"
                      v-model="$v.ISBN.$model"
                      :class="{
                        'is-invalid': validationStatus($v.ISBN),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.ISBN.required" class="invalid-feedback">
                      Please enter ISBN. (Required Failed)
                    </div>
                  </b-form-group>
                  <b-form-group label="Book Title" label-for="Title-input">
                    <b-form-input
                      placeholder="Enter Book Title"
                      id="Title-input"
                      v-model="$v.Title.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Title),
                      }"
                    >
                    </b-form-input>
                    <div
                      v-if="!$v.Title && !$v.required"
                      class="invalid-feedback"
                    >
                      Please enter Book Title. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Author" label-for="AuthorID-input">
                    <b-form-input
                      placeholder="Enter Author ID"
                      id="AuthorID-input"
                      v-model="$v.AuthorID.$model"
                      :class="{
                        'is-invalid': validationStatus($v.AuthorID),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.AuthorID.required" class="invalid-feedback">
                      Please enter Author. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group
                    label="Publisher "
                    label-for="PublisherID-input"
                  >
                    <b-form-input
                      id="PublisherID-input"
                      placeholder="Enter Publisher ID"
                      v-model="$v.PublisherID.$model"
                      :class="{
                        'is-invalid': validationStatus($v.PublisherID),
                      }"
                    >
                    </b-form-input>
                    <div
                      v-if="!$v.PublisherID.required"
                      class="invalid-feedback"
                    >
                      Please enter Publisher.(Failed Required)
                    </div>
                  </b-form-group>
                  <b-form-group
                    label="Publisher Year"
                    label-for="YearPublish-input"
                  >
                    <b-form-input
                      placeholder="Enter Publisher Year"
                      type="number"
                      id="YearPublish-input"
                      v-model="$v.YearPublish.$model"
                      :class="{
                        'is-invalid': validationStatus($v.YearPublish),
                      }"
                    >
                    </b-form-input>
                    <div
                      v-if="!$v.YearPublish.required"
                      class="invalid-feedback"
                    >
                      Please enter the Publisher Year. (Required Failed)
                    </div>
                  </b-form-group>
                  <b-form-group label="Page No" label-for="PageNo-input">
                    <b-form-input
                      placeholder="Enter Page No"
                      id="PageNo-input"
                      v-model="$v.PageNo.$model"
                      :class="{
                        'is-invalid': validationStatus($v.PageNo),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.PageNo.required" class="invalid-feedback">
                      Please enter Page No. (Failed Required)
                    </div>
                  </b-form-group>
                  <div class="buttons">
                    <b-button class="mt-3 btn-success" @click="bookSubmit()"
                      >Submit</b-button
                    >
                    <!-- <b-button class="close" to="/account"
                          >Close</b-button
                        > -->
              
                  </div>
                </form>
              </b-modal>

              <b-table
                class="tb"
                responsive
                
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
                style="float: right"
                pills
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>

              <p class="currentpage">Current Page: {{ currentPage }}</p>
              </div>
            </div>
          </b-container>
        </b-row>
           
      </b-container>
      
  </b-container>
  </body>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  name: "SearchPage",
  component: {},
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      //book
      ISBN: "",
      Title: "",
      AuthorID: "",
      PublisherID: "",
      YearPublish: "",
      PageNo: "",
      Action: "",
      perPageA: 10,
      currentPageA: 1,
      filterA: "",
      perPageP: 10,
      currentPageP: 1,
      filterP: "",
      AuthorFirstname: "",
      AuthorLastname: "",
      PublisherFirstname: "",
      PublisherLastname: "",

      // Status: "",
      fields: [
     
        { key: "ISBN", label: "ISBN", sortable: true },
        { key: "Title", label: "Book Title", sortable: true },
        { key: "AuthorFirstname", label: "Author Firstname", sortable: true },
        { key: "AuthorLastname", label: "Author Lastname", sortable: true },
        {
          key: "PublisherFirstname",
          label: "Publisher Firstname",
          sortable: true,
        },
        {
          key: "PublisherLastname",
          label: "Publisher Lastname",
          sortable: true,
        },
        { key: "PageNo", labe: "PageNo", sortable: true },
        { key: "YearPublish", label: "Year Publish", sortable: true },
        { key: "PublisherID", labe: "Page No", sortable: true },
     
      ],
   
    };
  },

  computed: {
    ...mapGetters({
      items: "books",
      authors: "authors",
      publishers: "publishers",
    }),

    rows() {
      return this.authors.length, this.publishers.length, this.items.length;
    },
  },

  async mounted() {
   
    return (
      await this.$store.dispatch("fetchBooks"),
      this.$store.dispatch("fetchAuthor"),
      this.$store.dispatch("fetchPublisher")
    );
  },

  validations: {
    ISBN: { required },
    Title: { required },
    AuthorID: { required },
    PageNo: { required },
    YearPublish: { required },
    PublisherID: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async bookSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookList);
        this.$store.dispatch("bookSubmit", {
          ISBN: this.ISBN,
          Title: this.Title,
          AuthorID: this.AuthorID,
          PublisherID: this.PublisherID,
          YearPublish: this.YearPublish,
          PageNo: this.PageNo,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
    // async created(){
    //   const res =await axios.get('books',{
    //     headers:{
    //       Authorization: 'Bearer ' + localStorage.getItem('token' , res.data.token)
    //     }
    //   });
    // }
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Poppins&display=swap');
* {
  padding: 0;
  margin: 0;
}

.navs {
  padding-top: 15px;
  background-color: #04104d;
  padding-bottom: 15px;
  width: 100%;
  position: fixed;
 
}
nav {
  align-items: center;
  justify-content: space-between;
  float: right;
  padding-left: 10%;
  padding-right: 10%;
 
 
}

nav ul li {
  display: inline-block;
  list-style-type: none;
  padding: 0px 20px;
}
.nav-item .nav-link {
  font-family: montserrat;
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
  padding-right: 10px;
  color: #ffffff;
}
nav ul .nav-item a.router-link-active {
  color: #ffffff;
  font-weight: bolder;
  border: 1px solid #eeb34b;
  outline-style: solid;
  outline-color: #eeb34b;
  outline-width: thin;
  width: 100px;
}
ul {
  padding-left: 2rem;
  padding-top: 8px;
}
.body-container{
  padding: 0px !important;
  height: 100vh !important;
}

.table-search{
  width: 100%;
  height: 100vh;
}

.tebs {
  padding-right: 2%;
  padding-left: 2%;
}


.tb {
 width: 100%;
 display: flex;
 margin-left:30px;
  justify-content: center;
  background-color:rgb(255, 255, 255);
}
.container {
  padding-top: 3%;
  width: 100%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
.selectbtn {
  margin-right: 5px;
}
.mt-3 {
  margin-right: 5px;
}
</style>
