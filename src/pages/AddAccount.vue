<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-col xl="10" lg="9" sm="9">
        <div class="head">
          <h4>Library System/ <span>Add Librarian Account</span></h4>
        </div>
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Add Librarian Account</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="handleSubmit">
                        <b-form-group label="Username:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="$v.Username.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Username),
                            }"
                            placeholder="Username"
                          />
                          {{ BookID }}
                          <div
                            v-if="!$v.Username.required"
                            class="invalid-feedback"
                          >
                            The full name field is required.
                          </div>
                          <div
                            v-if="!$v.Username.minLength"
                            class="invalid-feedback"
                          >
                            Username must have atleast{{
                              $v.Username.$params.minLength.min
                            }}
                          </div>
                          <div
                            v-if="!$v.Username.maxLength"
                            class="invalid-feedback"
                          >
                            Username must not have greater then
                            {{ $v.Username.$params.maxLength.min }}
                          </div>
                        </b-form-group>
                        <b-form-group label="Password:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="password"
                            v-model="$v.Password.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Password),
                            }"
                            placeholder="Password"
                          />
                          <div
                            v-if="!$v.Password.required"
                            class="invalid-feedback"
                          >
                            The Password name field is required.
                          </div>
                          <div
                            v-if="!$v.Password.minLength"
                            class="invalid-feedback"
                          >
                            Password must have atleast{{
                              $v.Password.$params.minLength.min
                            }}
                          </div>
                          <div
                            v-if="!$v.Password.maxLength"
                            class="invalid-feedback"
                          >
                            Password must not have greater then
                            {{ $v.Password.$params.maxLength.min }}
                          </div>
                        </b-form-group>
                        <b-form-group label="User ID:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="number"
                            v-model="$v.UserID.$model"
                            :class="{
                              'is-invalid': validationStatus($v.UserID),
                            }"
                            placeholder="User ID"
                          />
                          <div
                            v-if="!$v.UserID.required"
                            class="invalid-feedback"
                          >
                            The Password name field is required.
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
                          <div
                            v-if="!$v.Roles.required"
                            class="invalid-feedback"
                          >
                            The Roles field is required.
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
                          <div
                            v-if="!$v.Status.required"
                            class="invalid-feedback"
                          >
                            The Password name field is required.
                          </div>
                        </b-form-group>
                        <b-form-group class="input_button button">
                          <b-button class="input" type="submit"
                            >Submit</b-button
                          >

                          <router-link to="/account" class="btn btn-dark" exact
                            >Back</router-link
                          >
                        </b-form-group>
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
// import { required, minLength, maxLength } from ".././vuelidate/lib/validators"
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
      UserID: "",
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
    async handleSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        await axios.post("http://172.16.4.182:5000/api/accounts/", {
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
};

// methods: {
//   async handleSubmit() {
//     const response = await axios.post("http://localhost:5000/api/accounts/", {
//       Username: this.Username,
//       Password: this.Password,
//       UserID: this.UserID,
//       Roles: this.Roles,
//       Status: this.Status,
//     });
//     console.log(response);
//   },
// },
</script>

<style scoped>
nav {
  padding: 10px;
}

div.py-2 {
  padding: 0 !important;
}
.head {
  margin-left: 300px;
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
  margin-left: 120px;
}
.button-container {
  margin-right: 50px;
}
.btn {
  margin-left: 5px;
}
.input_box {
  margin-bottom: 2px;
}
.px-3 {
  text-align: center;
}
.form {
  align-content: center;
  justify-content: center;
}
.selects {
  width: 840px;
  height: 35px;
  border-radius: 5px;
  border-color: gray;
}
.input_button {
  float: right;
}
</style>
