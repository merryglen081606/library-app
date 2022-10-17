<template>
<b-container fluid id="hero">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-row class="rw">
          <HeaderCom title="Edit Book" />
        </b-row>
      <b-col xl="10" lg="9" sm="9">
           
        <!-- <div class="head">
          <h4>Library System/ <span>UpdateLibrarian</span></h4>
        </div> -->
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Update Book Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
         <b-form v-on:submit.prevent="updateBook">
                        <b-form-group label="ISBN" label-for="ISBN-input">
                          <b-form-input
                            placeholder="Enter ISBN"
                            id="ISBN-input"
                            v-model="$v.ISBN.$model"
                            :class="{
                              'is-invalid': validationStatus($v.ISBN),
                            }"
                          >
                          </b-form-input>

                          <div
                            v-if="!$v.ISBN.required"
                            class="invalid-feedback"
                          >
                            Please enter your ISBN.
                          </div>
                        </b-form-group>

                        <b-form-group label="Title" label-for="Title-input">
                          <b-form-input
                            id="Title-input"
                            v-model="$v.Title.$model"
                            type="varchar"
                            :class="{
                              'is-invalid': validationStatus($v.Title),
                            }"
                            placeholder="Enter Title"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.Title.required"
                            class="invalid-feedback"
                          >
                            Please enter Title
                          </div>
                        </b-form-group>
                        <b-form-group label="Author" label-for="Title-input">
                          <b-form-input
                            id="AuthorID-input"
                            v-model="$v.AuthorID.$model"
                            type="number"
                            :class="{
                              'is-invalid': validationStatus($v.AuthorID),
                            }"
                            placeholder="Enter AuthorID"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.AuthorID.required"
                            class="invalid-feedback"
                          >
                            Please enter AuthorID
                          </div>
                        </b-form-group>
                        <b-form-group label="Publisher" label-for="Title-input">
                          <b-form-input
                            id="PublisherID-input"
                            v-model="$v.PublisherID.$model"
                            type="number"
                            :class="{
                              'is-invalid': validationStatus($v.PublisherID),
                            }"
                            placeholder="Enter Publisher ID"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.PublisherID.required"
                            class="invalid-feedback"
                          >
                            Please enter Publisher ID
                          </div>
                        </b-form-group>
                        <b-form-group
                          label="Publish Year"
                          label-for="Title-input"
                        >
                          <b-form-input
                            id="YearPublish-input"
                            v-model="$v.YearPublish.$model"
                            type="number"
                            :class="{
                              'is-invalid': validationStatus($v.YearPublish),
                            }"
                            placeholder="Enter Year Publish"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.PublisherID.required"
                            class="invalid-feedback"
                          >
                            Please enter Publisher ID
                          </div>
                        </b-form-group>
                        <b-form-group label="Page No" label-for="PageNo-input">
                          <b-form-input
                            id="PageNo-input"
                            v-model="$v.PageNo.$model"
                            type="number"
                            :class="{
                              'is-invalid': validationStatus($v.PageNo),
                            }"
                            placeholder="Enter Year Publish"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.PageNo.required"
                            class="invalid-feedback"
                          >
                            Please enter Page No
                          </div>
                        </b-form-group>
                        <div class="buttons">
                          <b-button class="btn-success" @click="updateBook()"
                            >Submit</b-button
                          >
                           <b-button class="btn-dark" to="/books">
                            Back
                          </b-button>
                          <!-- <router-link to="/accounts"> Close </router-link> -->
                        </div>
                      </b-form>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import axios from "axios";
import api from "../../api";
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import HeaderCom from "../layout/HeaderCom.vue";
export default {
  name: "EditBook",
  components: {
    SidebarComponent,HeaderCom
  },
  data() {
    return {
      ISBN: "",
      Title: "",
      AuthorID: "",
      PageNo: "",
      YearPublish: "",
      PublisherID: "",
      bookID:"",
    };
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
    async updateBook() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookList);
        this.$store.dispatch("updateBook", {
          ISBN: this.ISBN,
          Title: this.Title,
          AuthorID: this.AuthorID,
          PublisherID: this.PublisherID,
          YearPublish: this.YearPublish,
          PageNo: this.PageNo,
          bookID: this.bookID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("books");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}books/` + this.$route.params.bookID
    );
    this.ISBN = res.data.response.ISBN;
    this.Title = res.data.response.Title;
    this.AuthorID = res.data.response.AuthorID;
    this.PublisherID = res.data.response.PublisherID;
    this.YearPublish = res.data.response.YearPublish;
    this.PageNo = res.data.response.PageNo;
    this.bookID = res.data.response.bookID;
  },

  computed: {
    ...mapGetters({ items: "books" }),
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style scoped>
nav {
  padding: 10px;
}

div.py-2 {
  padding: 0 !important;
}
.head {
  margin-left: 390px;
  background-color: #11101d;
  border-radius: 10px;
  margin-top: 15px;
  padding-left: 50px;
}
.head h4 {
  font-family: montserrat;
  color: rgb(240, 240, 240);
  padding-top: 10px;
  padding: 15px;
}
.head h4 span {
  color: #eeb34b;
  font-family: montserrat;
}
.container-card {
  background-color: rgb(107, 129, 190);
  align-content: center;
  justify-content: center;
  margin-left: 200px;
  width: 590px;
  margin-top: 50px;
  color: #ffff;
  
}
.buttons{
  margin-top:10px;
}
.button-container {
  margin-right: 50px;
}
.btn {
  margin-left: 5px;
}
.input_box {
  margin-bottom: 10px;
  margin-left: 20px;
}
.input {
  width: 520px;
}
.rw{
  margin-left:17%;
  width: 84%;
}
.px-3 {
  text-align: center;
  color: #11101d;
}
.form {
  align-content: center;
  justify-content: center;
}
.select {
  width: 520px;
}
.input_button {
  float: right;
}
@media (max-width: 1361px)
 {
  .container-card{
     margin-left: 80px;
      width: 420px;
  }

 }
  #hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
</style>
