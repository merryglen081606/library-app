<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Publisher</span></h4>
      </div>
      <!-- <template>  <div class="addbox ">
        <div class="addcon ">
          <div class="logo">
          <img src="../assets/LOGO1.png" alt="" class="lou-geh" />
          </div>
          <b-form-group class="input-type">
            <b-form-group class="fgroup" label="Firstname" >
              <b-form-input  class="input d-flex" name="firstname">

              </b-form-input>
            </b-form-group>
                <b-form-group class="fgroup" label="Firstname" >
              <b-form-input  class="input" name="firstname">

              </b-form-input>
            </b-form-group>
                <b-form-group class="fgroup" label="Firstname" >
              <b-form-input  class="input" name="firstname">

              </b-form-input>
            </b-form-group>
                <b-form-group class="fgroup" label="Firstname" >
              <b-form-input  class="input" name="firstname">

              </b-form-input>
            </b-form-group>
          
          </b-form-group>
        </div>
      </div></template> -->

      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Publisher Records</h1>
          <!-- <router-link to="/add-librarian" class="btn btn-dark" exact
            >Add Publisher</router-link
          > -->
          <template>
            <div>
              <b-button variant="dark" v-b-modal.modal-prevent-closing
                >Add Publisher</b-button
              >
              <b-form-fieldset
                style="float: right; padding-bottom: 10px"
                class="col-4"
              >
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
                title="Register Publisher"
                @hidden="resetModal"
              >
                <form ref="form" v-on:submit.stop.prevent="publisherSubmit">
                  <b-form-group label="Firstname" label-for="firstname-input">
                    <b-form-input
                      id="firstname-input"
                      v-model="$v.firstname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.firstname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.firstname.required" class="invalid-feedback">
                      Please enter Firstname. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Middlename" label-for="middlename-input">
                    <b-form-input
                      id="middlename-input"
                      v-model="$v.middlename.$model"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Lastname" label-for="lastname-input">
                    <b-form-input
                      id="lastname-input"
                      v-model="$v.lastname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.lastname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.lastname.required" class="invalid-feedback">
                      Please enter Lastname. (Failed Required)
                    </div>
                  </b-form-group>

                  <b-form-group label="Location" label-for="location-input">
                    <b-form-input
                      id="location-input"
                      v-model="$v.location.$model"
                      :class="{
                        'is-invalid': validationStatus($v.location),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.location.required" class="invalid-feedback">
                      Please select Location. (Failed Required)
                    </div>
                  </b-form-group>

                  <div class="buttons">
                    <b-button class="btn-success" @click="publisherSubmit()"
                      >Submit</b-button
                    >
                    <b-button class="close" block @click="hideModal"
                      >Close</b-button
                    >
                  </div>
                </form>
              </b-modal>
            </div>
          </template>

          <b-table
            responsive
            striped
            bordered
            hover
            id="my-table"
            :items="publishers"
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
          <p class="currentpage">Current Page: {{ currentPage }}</p>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  name: "PublisherPage",
  data() {
    return {
      firstname: "",
      middlename: "",
      lastname: "",
      location: "",
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: "publisherID", label: "Publisher ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "Location", label: "Location", sortable: true },
        { key: "action", label: "Action", sortable: true },
      ],
      // items: {
      //   publisherID: null,
      //   firstname: null,
      //   middlename: null,
      //   lastname: null,
      //   location: null,
      // },
    };
  },
  validations: {
    firstname: { required },
    middlename: {},
    lastname: { required },
    location: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async publisherSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.publisherList);
        this.$store.dispatch("publisherSubmit", {
          firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
          location: this.location,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },

  computed: {
    ...mapGetters({ publishers: "publishers" }),
    rows() {
      return this.publishers.length;
    },
  },
  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return await this.$store.dispatch("fetchPublisher");
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
.buttons {
  margin-top: 10px;
}
.addbox {
  /* margin-left: 300px; */
  justify-content: center;
  /* margin-left:350px;
 margin-bottom: 30px; */
  display: flex;
}
.addcon {
  height: 400px;
  width: 60%;
  margin-bottom: 30px;
  background-color: #11101d;
  border-radius: 40px;
}
.logo .lou-geh {
  height: 350px;
  width: 370px;
  margin-top: 10px;
  float: left;
}
.input-type {
  /* float:right; */
  display: flex;
}
.fgroup {
  font-size: 20px;
  color: white;
}

.fgroup .input {
  width: 300px;
  justify-content: center;
  display: flex;
}
</style>
