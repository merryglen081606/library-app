<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-col xl="10" lg="9" sm="9">
        <div class="head">
          <h4>Library System/ <span>UpdateLibrarian</span></h4>
        </div>
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Update Librarian Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="updateAccount">
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

                    <div v-if="!$v.ISBN.required" class="invalid-feedback">
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
                    <div v-if="!$v.Title.required" class="invalid-feedback">
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
                    <div v-if="!$v.AuthorID.required" class="invalid-feedback">
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
                    <div v-if="!$v.PublisherID.required" class="invalid-feedback">
                      Please enter Publisher ID
                    </div>
                  </b-form-group>
                    <b-form-group label="Publish Year" label-for="Title-input">
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
                    <div v-if="!$v.PublisherID.required" class="invalid-feedback">
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
                    <div v-if="!$v.PageNo.required" class="invalid-feedback">
                      Please enter Page No
                    </div>
                  </b-form-group>
                        <div class="buttons">
                          <b-button
                            class="btn-success"
                            @click="updateAccount()"
                            >Submit</b-button
                          >
                          <router-link to="/accounts">
                            Close
                          </router-link>
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

export default {
  name: "EditBook",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      ISBN: "",
      Title: "",
      AuthorID: "",
      PageNo: "",
      YearPublish: "",
      PublisherID: "",
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
    async accountSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.accountList);
        this.$store.dispatch("accountSubmit", {
          ISBN: this.ISBN,
          Title: this.Title,
          AuhotID: this.AuhotID,
          PublisherID: this.PublisherID,
          YearPublish: this.YearPublish,
          PageNo: this.PageNo,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("readers");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}readers/` + this.$route.params.BookID
    );
    this.ISBN = res.data.response.ISBN;
    this.Title = res.data.response.Title;
    this.AuhotID = res.data.response.AuhotID;
    this.PublisherID = res.data.response.PublisherID;
    this.YearPublish = res.data.response.YearPublish;
    this.PageNo = res.data.response.PageNo;
  },

  computed: {
    ...mapGetters({ items: "readers" }),
    rows() {
      return this.readers.length;
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
  background-color: #d4f0f7;
  align-content: center;
  justify-content: center;
  margin-left: 200px;
  width: 590px;
  margin-top: 50px;
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
.px-3 {
  text-align: center;
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
</style>
