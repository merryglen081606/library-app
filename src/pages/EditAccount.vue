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
                           <b-form-group label="Username" label-for="Username-input">
                    <b-form-input
                      placeholder="Enter Username"
                      icon="tools"
                      id="Username-input"
                      v-model="$v.Username.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Username),
                      }"
                    >
                    </b-form-input>

                    <div v-if="!$v.Username.required" class="invalid-feedback">
                      Please enter your Username.
                    </div>
                    <div v-if="!$v.Username.minLength" class="invalid-feedback">
                      Username must have atleast{{
                        $v.Username.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.Username.maxLength" class="invalid-feedback">
                      Username must not have greater then
                      {{ $v.Username.$params.maxLength.min }}
                    </div>
                  </b-form-group>

                  <b-form-group label="Password" label-for="Password-input">
                    <b-form-input
                      id="Password-input"
                      v-model="$v.Password.$model"
                      type="password"
                      :class="{
                        'is-invalid': validationStatus($v.Password),
                      }"
                      placeholder="Enter Password"
                    >
                    </b-form-input>
                    <div v-if="!$v.Password.required" class="invalid-feedback">
                      Please enter Password
                    </div>
                    <div v-if="!$v.Password.minLength" class="invalid-feedback">
                      Password must have atleast{{
                        $v.Password.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.Password.maxLength" class="invalid-feedback">
                      Password must not have greater then
                      {{ $v.Password.$params.maxLength.min }}
                    </div>
                  </b-form-group>
                         <b-form-group label="Roles:*">
                    <b-form-select
                      v-model="$v.Roles.$model"
                      class="form-control"
                      :class="{
                        'is-invalid': validationStatus($v.Roles),
                      }"
                    >
                      <b-form-select-option :value="null"
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Admin"
                        >Admin</b-form-select-option
                      >
                      <b-form-select-option value="User"
                        >User</b-form-select-option
                      >
                    </b-form-select>
                    <div v-if="!$v.Roles.required" class="invalid-feedback">
                      Please select your Role.
                    </div>
                  </b-form-group>

                  <b-form-group label="Status:*">
                    <b-form-select
                      class="form-control"
                      v-model="$v.Status.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Status),
                      }"
                      id="Status-select"
                    >
                      <b-form-select-option
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Working"
                        >Working</b-form-select-option
                      >
                      <b-form-select-option value="Not Working"
                        >Not Working</b-form-select-option
                      >
                    </b-form-select>
                    <div v-if="!$v.Status.required" class="invalid-feedback">
                      Please select Status
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
// import { required, minLength, maxLength } from ".././vuelidate/lib/validators"
// import { required } from "vuelidate/lib/validators";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "AddAccount",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      Username: "",
      Password: "",
      Librarian: "",
      Roles: "",
      Status: "",
    

     
    };
  },

validations: {
    Username: { required, minLength: minLength(6), maxLength: maxLength(18) },
    Password: { required, minLength: minLength(8), maxLength: maxLength(18) },
    UserID: { required },
    Roles: { required },
    Status: { required },
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
          Username: this.Username,
          Password: this.Password,
          UserID: this.UserID,
          Roles: this.Roles,
          Status: this.Status,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("accounts");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}accounts/` + this.$route.params.AccountID
    );

    this.Username = res.data.response.Username;
    this.Password = res.data.response.Password;
    this.UserID = res.data.response.UserID;
    this.Roles = res.data.response.Roles;
    this.Status = res.data.response.Status;
  },

  computed: {
    ...mapGetters({ items: "accounts" }),

    rows() {
      return this.accounts.length;
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
