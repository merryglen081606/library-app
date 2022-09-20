<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-col xl="10" lg="9" sm="9">
        <div class="head">
          <h4>Library System/<span>Librarian</span></h4>
        </div>
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Add Librarian</h4>
                  <b-row>
                    <b-col cols="12" class="mt-3">
                      <b-form @submit.prevent="handleSubmit">
                        <FormInput v-model="Username" label="Username" />
                        <FormInput v-model="Password" label="Password" />
                        <FormInput v-model="UserID" label="UserID" />
                        <FormInput v-model="Roles" label="Roles" />
                        <FormInput v-model="Status" label="Status" />
                      </b-form>
                    </b-col>
                    <b-col>
                      <b-container
                        class="button-container d-flex justify-content-end"
                      >
                        <b-button variant="success" type="submit"
                          >Save Info</b-button
                        >

                        <router-link to="/librarians" class="btn btn-dark" exact
                          >Back</router-link
                        >
                      </b-container>
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
import FormInput from "../components/FormInput.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import axios from "axios";

export default {
  name: "AddAccount",
  components: {
    FormInput,
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
    handleSubmit() {
      const data = {
        Username: this.Username,
        Password: this.Password,
        UserID: this.UserID,
        Roles: this.Roles,
        Status: this.Status,
      };
      axios
        .post("http://localhost:8080/add-librarian", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  /*data() {
    return {
      value: "",
      fields: ["ID", "firstname", "middlename", "lastname", "actions"],
      items: [
        {
          ID: 1,
          Username: "",
          Password: "",
          UserID: "",
          Roles: "",
          Status: "",
        },
      ],
    };
  },*/
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
}
.button-container {
  margin-right: 50px;
}
.btn {
  margin-left: 5px;
}
</style>
