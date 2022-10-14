<template>
  <b-container fluid id="hero">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-row>
          <HeaderCom title="Edit Publisher" />
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
                  <h4 class="px-3"> Publisher Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="updatePublisher">
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
                          <b-button class="btn-success" @click="updatePublisher()"
                            >Submit</b-button
                          >
                          <!-- <router-link class="close-btn" to="/account">
                            Close
                          </router-link> -->
                          <b-button class="btn-dark" to="/publisher">
                            Back
                          </b-button>
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
import HeaderCom from "../layout/HeaderCom.vue";
import { required} from "vuelidate/lib/validators";


export default {
  name: "EditPublisher",
  components: {
    SidebarComponent, HeaderCom,
  },
  data() {
    return {
    firstname: "",
      middlename: "",
      lastname: "",
      location: "",
      publisherID:"",
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
    async updatePublisher() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.publisherList);
        this.$store.dispatch("updatePublisher", {
           firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
          location: this.location,
            publisherID: this.publisherID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("publishers");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}publishers/` + this.$route.params.publisherID
    );
    this.firstname = res.data.response.Firstname;
    this.middlename = res.data.response.Middlename;
    this.lastname = res.data.response.Lastname;
    //this.Roles.select.items = res.data.response.Roles;
    this.location = res.data.response.Location;
      this.publisherID = res.data.response.publisherID;
  },

  computed: {
    ...mapGetters({ publishers: "publishers" }),
    rows() {
      return this.publishers.length;
    },
  },
};
</script>

<style scoped>
nav {
  padding: 10px;
}
.buttons{
  margin-top:10px;
}
div.py-2 {
  padding: 0 !important;
}
.head {
  margin-left: 390px;
 background-color: rgb(176, 176, 176);
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
 background-color: rgb(176, 176, 176);
  align-content: center;
  justify-content: center;
  margin-left: 200px;
  width: 590px;
  margin-top: 50px;
  color: #ffff;
  
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
