<template>
  <b-container fluid id="hero">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-row class="rw">
          <HeaderCom title="Edit Reader" />
        </b-row>
      <b-col xl="10" lg="9" sm="9">
       
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3"> Reader Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="updateReader">
                        <b-form-group
                          label="Reader No"
                          label-for="ReaderNo-input"
                        >
                          <b-form-input
                            id="ReaderNo-input"
                            v-model="$v.ReaderNo.$model"
                          readonly
                          >
                          </b-form-input>
                          
                        </b-form-group>
                        <b-form-group
                          label="Librarian"
                          label-for="Librarian-input"
                        >
                          <b-form-input
                            placeholder="Enter Librarian ID"
                            id="LibrarianID"
                            v-model="$v.LibrarianID.$model"
                            :class="{
                              'is-invalid': validationStatus($v.LibrarianID),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.LibrarianID.required"
                            class="invalid-feedback"
                          >
                            Please enter your Librarian ID.
                          </div>
                        </b-form-group>
                        <b-form-group
                          label="Firstname"
                          label-for="Username-input"
                        >
                          <b-form-input
                            placeholder="Enter Firstname"
                            id="Firstname"
                            v-model="$v.Firstname.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Firstname),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.Firstname.required"
                            class="invalid-feedback"
                          >
                            Please enter your Firstname.
                          </div>
                        </b-form-group>
                        <b-form-group
                          label="Lastname"
                          label-for="Lastname-input"
                        >
                          <b-form-input
                            id="Lastname"
                            v-model="$v.Lastname.$model"
                            type="text"
                            :class="{
                              'is-invalid': validationStatus($v.Lastname),
                            }"
                            placeholder="Enter Lastname"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.Lastname.required"
                            class="invalid-feedback"
                          >
                            Please enter Lastname
                          </div>
                        </b-form-group>
                        <b-form-group label="Birthdate" label-for="City-input">
                          <b-form-input
                            id="Birthdate-input"
                            v-model="$v.Birthdate.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Birthdate),
                            }"
                          >
                          </b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="Contact No"
                          label-for="ContactNo-input"
                        >
                          <b-form-input
                            placeholder="Enter Contact No"
                            id="ContactNo"
                            v-model="$v.ContactNo.$model"
                            :class="{
                              'is-invalid': validationStatus($v.ContactNo),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.ContactNo.required"
                            class="invalid-feedback"
                          >
                            Please enter your Contact No.
                          </div>
                        </b-form-group>
                        <b-form-group label="Gender" label-for="Gender-value">
                          <b-form-select
                            v-model="$v.Gender.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Gender),
                            }"
                            id="Gender-select"
                            class="form-control"
                          >
                            <b-form-select-option
                              >Please select an option</b-form-select-option
                            >
                            <b-form-select-option value="Female"
                              >Male</b-form-select-option
                            >
                            <b-form-select-option value="Male"
                              >Felame</b-form-select-option
                            >
                          </b-form-select>
                          <div
                            v-if="!$v.Gender.required"
                            class="invalid-feedback"
                          >
                            Please Select Gender.(Required Failed)
                          </div>
                        </b-form-group>
                        <b-form-group label="Status" label-for="Status-value">
                          <b-form-select
                            v-model="$v.Status.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Status),
                            }"
                            id="Status-select"
                            class="form-control"
                          >
                            <b-form-select-option
                              >Please select an option</b-form-select-option
                            >
                            <b-form-select-option value="Active"
                              >Acvtive</b-form-select-option
                            >
                            <b-form-select-option value="Not Active"
                              >Not Active</b-form-select-option
                            >
                          </b-form-select>
                          <div
                            v-if="!$v.Status.required"
                            class="invalid-feedback"
                          >
                            Please Select Status. (Required Failed)
                          </div>
                        </b-form-group>
                        <b-form-group label="Address" label-for="City-input">
                          <b-form-input
                            id="Address-input"
                            v-model="$v.City.$model"
                            :class="{
                              'is-invalid': validationStatus($v.City),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.City.required"
                            class="invalid-feedback"
                          >
                            Please enter Address. (Required Failed)
                          </div>
                        </b-form-group>
                        <b-form-group
                          label="RegisterDate"
                          label-for="City-input"
                        >
                          <b-form-input
                            id="Address-input"
                            v-model="$v.RegisterDate.$model"
                            :class="{
                              'is-invalid': validationStatus($v.RegisterDate),
                            }"
                          >
                          </b-form-input>
                        </b-form-group>

                        <div class="buttons">
                          <b-button class="btn-success" @click="updateReader()"
                            >Submit</b-button
                          >
                          <!-- <router-link to="/readers"> Close </router-link> -->
                          <b-button class="btn-dark" to="/readers">
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
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "AddAccount",
  components: {
    SidebarComponent,HeaderCom
  },
  data() {
    return {
      ReaderNo:"",
      Firstname: "",
      Lastname: "",
      Birthdate: "",
      Gender: "",
      LibrarianID: "",
      RegisterDate: "",
      ContactNo: "",
      Status: "",
      City: "",
    };
  },
  validations: {
    Firstname: { required },
    Lastname: { required },
    ReaderNo: { required },
    Birthdate: { required },
    Gender: { required },
    LibrarianID: { required },
    RegisterDate: { required },
    ContactNo: { required, minLength: minLength(11), maxLength: maxLength(11) },
    Status: { required },
    City: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async updateReader() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.readerList);
        this.$store.dispatch("updateReader", {
          Firstname: this.Firstname,
          Lastname: this.Lastname,
          ReaderNo: this.ReaderNo,
          Birthdate: this.Birthdate,
          Gender: this.Gender,
          LibrarianID: this.LibrarianID,
          RegisterDate: this.RegisterDate,
          ContactNo: this.ContactNo,
          Status: this.Status,
          City: this.City,
           ReaderID: this.ReaderID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid Data");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("readers");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}reader/` + this.$route.params.ReaderID
    );
    // console.log(this.response.LibrarianID)
    this.Firstname = res.data.response.Firstname;
    this.Lastname = res.data.response.Lastname;
    this.ReaderNo = res.data.response.ReaderNo;
    this.Birthdate = res.data.response.Birthdate;
    this.Gender = res.data.response.Gender;
    this.LibrarianID = res.data.response.LibrarianID;
    this.RegisterDate = res.data.response.RegisterDate;
    this.ContactNo = res.data.response.ContactNo;
    this.Status = res.data.response.Status;
    this.City = res.data.response.City;
    this.ReaderID = res.data.response.ReaderID;
  },

  computed: {
    ...mapGetters({ items: "readers" }),

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
 background-color: rgb(176, 176, 176);
  align-content: center;
  justify-content: center;
  margin-left: 200px;
  width: 590px;
  margin-top: 50px;
}
.rw{
  margin-left:16%;
  width: 100%;
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
}
.input_button {
  float: right;
}
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
</style>
