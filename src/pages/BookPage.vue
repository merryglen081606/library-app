<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <b-row class="rw">
          <HeaderCom title="Book" />
        </b-row>

        <b-row class="container d-flex justify-content-center">
          <b-container class="tebs">
            <div class="tbales">
              <h1>Book Records</h1>

              <b-button
                variant="dark"
                class="selectbtn"
                v-b-modal.modal-prevent-closing
                ><b-icon icon="plus-md"></b-icon> Add Book</b-button
              >
              <b-button
                class="selectbtn"
                squared
                variant="outline-secondary"
                to="/copies"
                ><b-icon icon="journal-bookmark-fill"></b-icon> Book
                Copy</b-button
              >
              <b-button
                class="selectbtn"
                squared
                variant="outline-secondary"
                to="/shelves"
              >
                <b-icon icon="bookshelf"></b-icon> Book Shelf</b-button
              >
              <b-button
                class="selectbtn"
                squared
                variant="outline-secondary"
                to="/category"
                ><b-icon icon="book-half"></b-icon> Book Category</b-button
              >

              <b-button
                class="selectbtn"
                to="/subcategory"
                squared
                variant="outline-secondary"
                ><b-icon icon="book-fill"></b-icon> Book Sub-category</b-button
              >

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
                    <b-button
                      class="mt-3"
                      variant="outline-danger"
                      to="/books"
                      block
                      @click="hideModal"
                      >Close</b-button
                    >
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
                <template v-slot:cell(Action)="data">
                  <router-link
                    tag="button"
                    :to="'/editbook/' + data.item.bookID"
                    class="btn btn-success edits"
                  >
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>
                </template>
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
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderCom from "../layout/HeaderCom.vue";

import { required } from "vuelidate/lib/validators";

import { mapGetters } from "vuex";
export default {
  name: "BookPage",
  components: { SidebarComponent, HeaderCom },
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
        { key: "bookID", label: "Book ID", sortable: true },
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
        { key: "Action", label: "Action", sortable: true },
      ],
      author: [
        { key: "AuthorID", label: "Author ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],
      publisher: [
        { key: "publisherID", label: "Publisher ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
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
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
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
/* .AddAccount {
  float: left;
  margin-left: 190px;
  width: 30%;
}

.from {
  margin-left: 30%;
  display: grid;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  margin-right: 30px;
  margin-top: 50px;
  background-color: #f4f4ff;
  border-radius: 5px;

  outline-style: solid;
  outline-color: #6d6d6f;
}

.tebs {
  background-color: #f4f4ff;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;
  margin-top: 50px;
  width: 1050px;
 
  margin-right: 60px;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
.dmodal{
width: fit-content;
height: fit-content;
 margin-top: 10px;
  width: 150px;
}
.selectbtn{
  margin-right:5px;
} */
#hero{
   background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
   width: 100%;
   height: 100vh;
}
.tb {
  width: 1500px;
  display: flex;
  

  /* padding-bottom: 80px; */
  

}
.rw{
  margin-left:16%;
  width: 100%;
}
.tebs {
  padding-right: 2%;
  padding-left: 2%;

  /* background-color: beige; */
  /* width: 1900px; */
}
.tbales {
  /* background-color: #f4f4ff; */
  width: fit-content;
}
/* .tbales {
  padding-right: 2%;
  padding-left: 2%;
  background-color: #f4f4ff;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 5px;
  width: 100%;
 
  
} */
.container {
  padding-top: 10px;
  margin-left: 11%;
  width: 100%;
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
