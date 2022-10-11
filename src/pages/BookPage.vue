<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <HeaderCom title="Account" />

        <b-col class="">
          <b-container d-flex class="AddAccount">
            <b-row class="rows">
              <b-col d-flex class="from">
                <h4>Create Book</h4>
                <b-row
                  class="select-button"
                  style="
                    align-items: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <b-button
                    v-b-modal.modal-2
                    style="
                      width: fit-content;
                      height: fit-content;
                      margin-top: 10px;
                      margin-right: 5px;
                      width: 150px;
                    "
                    >Author List</b-button
                  >
                  <b-modal id="modal-2" title="Librarian List">
                    <b-container class="tebs">
                      <b-form-fieldset
                        style="float: right; padding-bottom: 2px"
                        class="col-4"
                      >
                        <b-input
                          v-model="filterS"
                          placeholder="Type here to Search..."
                        ></b-input>
                      </b-form-fieldset>
                      <br /><br />
                      <b-table
                        responsive
                        striped
                        bordered
                        hover
                        id="my-table"
                        :items="authors"
                        :filter="filterA"
                        :fields="author"
                        primary-key
                        label-sort-asc=""
                        label-sort-desc=""
                        label-sort-clear=""
                        :per-page="perPageA"
                        :current-page="currentPageA"
                      ></b-table>
                      <b-pagination
                        v-model="currentPageA"
                        pills
                        :total-rows="rows"
                        :per-page="perPageA"
                        aria-controls="my-table"
                      ></b-pagination>

                      <p class="currentpage">
                        Current Page: {{ currentPageA }}
                      </p>
                    </b-container>
                  </b-modal>
                  <b-button
                    v-b-modal.modal-1
                    style="
                      width: fit-content;
                      height: fit-content;
                      margin-top: 10px;
                      width: 150px;
                    "
                    >Publisher List</b-button
                  >
                  <b-modal id="modal-1" title="Librarian List">
                    <b-container class="tebs">
                      <b-form-fieldset
                        style="float: right; padding-bottom: 2px"
                        class="col-4"
                      >
                        <b-input
                          v-model="filterS"
                          placeholder="Type here to Search..."
                        ></b-input>
                      </b-form-fieldset>
                      <br /><br />
                      <b-table
                        responsive
                        striped
                        bordered
                        hover
                        id="my-table"
                        :items="publishers"
                        :filter="filterP"
                        :fields="publisher"
                        primary-key
                        label-sort-asc=""
                        label-sort-desc=""
                        label-sort-clear=""
                        :per-page="perPageP"
                        :current-page="currentPageP"
                      ></b-table>
                      <b-pagination
                        v-model="currentPageP"
                        pills
                        :total-rows="rows"
                        :per-page="perPageP"
                        aria-controls="my-table"
                      ></b-pagination>

                      <p class="currentpage">
                        Current Page: {{ currentPageP }}
                      </p>
                    </b-container>
                  </b-modal>
                </b-row>

                <b-form v-on:submit.stop.prevent="bookSubmit">
                 
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

                  <b-container
                    class="button-container d-flex justify-content-center"
                  >
                    <b-button
                      pill
                      class="pill"
                      variant="outline-dark"
                      @click="bookSubmit()"
                      >Submit Data</b-button
                    >
                  </b-container>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-row>
          <b-container class="tebs">
            <h1>Account Records</h1>
            <b-form-fieldset
              style="float: right; padding-bottom: 2px"
              class="col-4"
            >
              <b-input
                v-model="filter"
                placeholder="Type here to Search..."
              ></b-input>
            </b-form-fieldset>
            <br /><br />
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
              <template v-slot:cell(Action)="data">
                <router-link
                  tag="button"
                  :to="'/editlibrarian/' + data.item.UserID"
                  class="btn btn-success edits"
                  >UPDATE
                  <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                </router-link>
                <!-- <router-link :to="
                  {
                    name: 'EditLibrarian',
                    params: {UserID: data.item._id}
                  }"
                  tag="button"
                
                  class="btn btn-success edits" >Update
                  <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>  -->
              </template>
            </b-table>
            <!--End  DataTable Code-->

            <b-pagination
              v-model="currentPage"
              pills
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>

            <p class="currentpage">Current Page: {{ currentPage }}</p>
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
      //author
      //pusblisher
      firstname: "",
      lastname: "",

      // Status: "",
      fields: [
        { key: "bookID", label: "User ID", sortable: true },
        { key: "ISBN", label: "ISBN", sortable: true },
        { key: "Title", label: "Book Title", sortable: true },
        { key: "AuthorID", label: "Author", sortable: true },
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
.AddAccount {
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
  /* outline-style: solid;
  outline-color: #6d6d6f; */
  margin-right: 60px;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
</style>
