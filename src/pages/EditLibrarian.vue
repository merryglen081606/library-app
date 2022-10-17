<template>
  <b-container fluid id="hero">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-row class="rw">
          <HeaderCom title="Edit Librarian" />
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
                  <h4 class="px-3"> Librarian Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
<b-form v-on:submit.prevent="updateLibrarian">
                        <b-form-group label="Firstname:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="$v.Firstname.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Firstname),
                            }"
                            placeholder="Firstname"
                          />
                          <div
                            v-if="!$v.Firstname.required"
                            class="invalid-feedback"
                          >
                            The full name field is required.
                          </div>
                        </b-form-group>
                        <b-form-group label="Middlename:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="$v.Middlename.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Middlename),
                            }"
                            placeholder="Middlename"
                          />
                          <div
                            v-if="!$v.Middlename.required"
                            class="invalid-feedback"
                          >
                            The full name field is required.
                          </div>
                        </b-form-group>
                        <b-form-group label="Lastname:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="$v.Lastname.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Lastname),
                            }"
                            placeholder="Lastname"
                          />
                          <div
                            v-if="!$v.Lastname.required"
                            class="invalid-feedback"
                          >
                            The full name field is required.
                          </div>
                        </b-form-group>

                        <b-form-group
                          label="RegisterDate"
                          label-for="RegisterDate-date"
                          class="input_box"
                          type="text"
                        >
                          <b-form-input
                            type="text"
                            class="input"
                            id="RegisterDate-date"
                            v-model="$v.RegisterDate.$model"
                            readonly
                          >
                          </b-form-input>
                        </b-form-group>

                        <b-form-group
                          class="input_box"
                          label="Gender"
                          label-for="Gender-value"
                        >
                          <b-form-select
                        
                            v-model="Gender"
                            id="Gender-select"
                            class="select"
                          >
                            <b-form-select-option value="Female"
                              >Female</b-form-select-option
                            >
                            <b-form-select-option value="Male"
                              >Male</b-form-select-option
                            >
                          </b-form-select>
                        </b-form-group>
                        <div class="buttons">
                          <b-button
                            class="btn-success"
                            @click="updateLibrarian()"
                            >Submit</b-button
                          >
                         <b-button class="btn-dark" to="/librarians">
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
import HeaderCom from "../layout/HeaderCom.vue";
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddAccount",
  components: {
    SidebarComponent,HeaderCom
  },
  data() {
    return {
      Firstname: "",
      Middlename: "",
      Lastname: "",
      RegisterDate: "",
      Gender: "",
      UserID: "",

      item: {
        Firstname: "",
        Middlename: "",
        Lastname: "",
        RegisterDate: "",
        Gender: "",
        UserID: "",
      },
    };
  },

  validations: {
    Firstname: { required },
    Middlename: { required },
    Lastname: { required },
    RegisterDate: {},
    Gender: { required },
    UserID: {},
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async updateLibrarian() {
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;
      try {
        //  update
        console.log("newsup", this.librarianList);
        this.$store.dispatch("updateLibrarian", {
          Firstname: this.Firstname,
          Middlename: this.Middlename,
          Lastname: this.Lastname,
          RegisterDate: this.RegisterDate,
          Gender: this.Gender,
          UserID: this.UserID,
        });

        alert("Data Successfully Updated");
      } catch (error) {
        alert(error);
      }
    },

  },
  beforeCreate() {
    this.$store.dispatch("librarians");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}librarian/` + this.$route.params.UserID
    );
    let date = new Date(res.data.response.RegisterDate);

    let newdate = date.toISOString().split("T")[0];
    this.UserID = res.data.response.UserID;
    this.Firstname = res.data.response.Firstname;
    this.Middlename = res.data.response.Middlename;
    this.Lastname = res.data.response.Lastname;
    this.RegisterDate = newdate;
    this.Gender = res.data.response.Gender;
  },

  computed: {
    ...mapGetters({ librarians: "librarians" }),

    rows() {
      return this.librarians.length;
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
  height: 40px;
  border-radius: 5px;
}
.rw {
   margin-left: 15%;
  width: 83%;
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
