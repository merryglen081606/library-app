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
                      <b-form @submit.prevent="handleSubmit">
                        <b-form-group label="Username:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="Username"
                            placeholder="Username"
                            required
                          />
                        </b-form-group>
                        <b-form-group label="Password:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="password"
                            v-model="Password"
                            placeholder="Password"
                            required
                          />
                        </b-form-group>
                        <b-form-group label="User ID:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="number"
                            v-model="UserID"
                            placeholder="User ID"
                            required
                          />
                        </b-form-group>
                        <b-form-group label="Roles:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="Roles"
                            placeholder="Roles"
                            required
                          />
                        </b-form-group>
                        <b-form-group label="Status:*" class="input_box">
                          <b-form-input
                            class="input"
                            type="text"
                            v-model="Status"
                            placeholder="Status"
                            required
                          />
                        </b-form-group>
                        <b-form-group class="input_box button">
                          <b-button class="input" type="submit"
                            >Submit</b-button
                          >

                          <router-link
                            to="/librarians"
                            class="btn btn-dark"
                            exact
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

  methods: {
    async handleSubmit() {
      const response = await axios.post("http://localhost:5000/api/accounts/", {
        Username: this.Username,
        Password: this.Password,
        UserID: this.UserID,
        Roles: this.Roles,
        Status: this.Status,
      });
      console.log(response);
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
</style>