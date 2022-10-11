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

                        <!-- <b-form-group class="input_button button">
                          <b-button class="inputs" @click="updateLibrarian()"
                            >Update</b-button>

                          <router-link
                            to="/librarians"
                            class="btn btn-dark"
                            exact
                            >Back</router-link>
                        </b-form-group> -->
                        <div class="buttons">
                          <b-button
                            class="btn-success"
                            @click="updateLibrarian()"
                            >Submit</b-button
                          >
                          <router-link class="close" to="/librarians" exact
                            >Close</router-link
                          >
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
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddAccount",
  components: {
    SidebarComponent,
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
    // async updateLibrarianID() {
    //   this.$v.$touch();

    //   if (this.$v.$pendding || this.$v.$error) return;
    //   try {
    //     //  update
    //     console.log("newsup", this.librarianList);
    //     this.$store.dispatch("fetchLibrarianID", {
    //       Firstname: this.Firstname,
    //       Middlename: this.Middlename,
    //       Lastname: this.Lastname,
    //       RegisterDate: this.RegisterDate,
    //       Gender: this.Gender,
    //       UserID: this.UserID,
    //     });

    //     alert("Data Successfully Updated");
    //   } catch (error) {
    //     alert(error);
    //   }
    // },
  },
  beforeCreate() {
    this.$store.dispatch("librarians");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}librarian/` + this.$route.params.UserID
    );
    // console.warn(this.$route.params.UserID)
    let date = new Date(res.data.response.RegisterDate);

    let newdate = date.toISOString().split("T")[0];
    this.UserID = res.data.response.UserID;
    this.Firstname = res.data.response.Firstname;
    this.Middlename = res.data.response.Middlename;
    this.Lastname = res.data.response.Lastname;
    this.RegisterDate = newdate;
    this.Gender = res.data.response.Gender;
  },
  // async mounted() {

  //  const res = await this.$store.dispatch("fetchLibrarians");
  //  this.Firstname = res.Firstname;

  // },
  //   async mounted() {
  //   if (localStorage.getItem("token") === null) {
  //     this.$router.push("/login");
  //   }
  //   return await this.$store.dispatch("fetchLibrarian");
  // },
  computed: {
    ...mapGetters({ librarians: "librarians" }),

    rows() {
      return this.librarians.length;
    },
  },
  //   async mounted() {
  //     const res = await this.$store.dispatch("fetchLibrarian"  + this.$route.params.UserID);
  //     {
  //  let date = new Date(res.data.response.RegisterDate);

  //     let newdate = date.toISOString().split("T")[0];
  //     this.UserID = res.data.response.UserID;
  //     this.Firstname = res.data.response.Firstname;
  //     this.Middlename = res.data.response.Middlename;
  //     this.Lastname = res.data.response.Lastname;
  //     this.RegisterDate = newdate;
  //     this.Gender = res.data.response.Gender;
  //     }

  //   },
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
