<template>
  <body>
    <section fluid id="libra">
      <div class="navs">
        <a
          class="navbar-brand"
          style="
            font-size: 30px;
            font-weight: bolder;
            font-family: montserrat;
            color: #ffffff;
            padding-left: 70px;
            padding-top: 20px;
          "
          href="#"
          >Lou Geh<span
            style="color: #eeb34b; font-family: montserrat; padding-top: 20px"
          >
            Library System</span
          ></a
        >

        <nav>
          <ul>
            <li class="nav-item">
              <a
                ><router-link to="/" class="nav-link" exact
                  >Home</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                ><router-link to="/search" class="nav-link" exact
                  >Search</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                ><router-link to="/login" class="nav-link" exact
                  >Login</router-link
                ></a
              >
            </li>
            <!-- <li class="nav-item">
                      <router-link to="/login" class="nav-link" exact
                        >Login</router-link
                      >
                    </li> -->
          </ul>
        </nav>
      </div>
      <b-row class="rw">
        <b-col class="d-flex justify-content-center">
          <b-form class="form" v-on:submit.stop.prevent="handleSubmit">
            <b-form-group class="input_box">
              <b-input-group size="md">
                <b-input-group-prepend is-text>
                  <b-icon class="envelope" icon="person"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Enter Username"
                  v-model="$v.Username.$model"
                  :class="{
                    'is-invalid': validationStatus($v.Username),
                  }"
                ></b-form-input>
                <div v-if="!$v.Username.required" class="invalid-feedback">
                  Please enter Username. (Required Failed)
                </div>
              </b-input-group>
            </b-form-group>
            <b-form-group class="input_box">
              <b-input-group size="md">
                <b-input-group-prepend is-text>
                  <b-icon class="envelope" icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Enter Password"
                  v-model="$v.Password.$model"
                  :class="{
                    'is-invalid': validationStatus($v.Password),
                  }"
                ></b-form-input>
                <div v-if="!$v.Password.required" class="invalid-feedback">
                  Please enter Password. (Required Failed)
                </div>
              </b-input-group>
            </b-form-group>

            <b-form-group>
              <b-button
                class="button"
                @click="handleSubmit()"
                onClick="refreshPage()"
                >Login</b-button
              >

              <!--<iput href="./books" type="submit" value="Login" />-->
              <!--<router-link to="./books" type="submit" exact value="Login"></router-link>-->
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <!-- <v-container>
            <v-form>
              <v-text-field v-model="loginInfo.Username" label="Username"/>
                <v-text-field v-model="loginInfo.Password" label="Passwword"/>
            </v-form>
          </v-container> -->

      <div class="alert-container d-flex justify-content-end">
        <b-alert
          class="alert"
          v-model="alert.showAlert"
          @dismissed="alert.showAlert = null"
          :variant="alert.variant"
        >
          <div>
            <b-icon
              class="mr-2"
              :icon="
                alert.variant == 'success'
                  ? 'check-lg'
                  : 'exclamation-triangle-fill'
              "
              fill="black"
            >
            </b-icon>
            {{ alert.message }}
          </div>
        </b-alert>
      </div>
    </section>
  </body>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "LoginPage",
  component: {},
  data() {
    return {
      alert: {
        dismissSecs: 0,
        showAlert: 0,
        variant: "",
        message: "",
      },

      Username: "",
      Password: "",
    };
  },

  validations: {
    Username: { required },
    Password: { required },
  },

  methods: {
    showAlert(message, variant) {
      this.alert = {
        dismissSecs: 10,
        showAlert: 5,
        message,
        variant,
      };
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async handleSubmit() {
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) {
        this.showAlert("Invalid", "danger");
      } else {
        try {
          console.log("newsup", this.account);
          this.$store.dispatch("handleSubmit", {
            Username: this.Username,
            Password: this.Password,
          });

          //       // if (this.account.Username == "!==") {
          //       //   this.errors.push("Username/Password Invalid");
          //       // }
        } catch (error) {
          alert("Invalid User");
        }
      }
    },
  },
  refreshPage() {
    window.location.reload();
  },
  async mounted() {
    if (localStorage.getItem("token") !== null) {
      this.$router.push("/books");
    }
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
#libra {
  background: url(../assets/image/lib-background.jpeg);
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.form {
  width: 25%;
  height: auto;
  background-color: rgb(187, 215, 239);
  align-content: center;

  margin-top: 10%;
  /* margin-left: 30%; */
  padding-top: 80px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  padding-bottom: 20px;
  align-content: center;
}
/* .input{
height: 45px;
width: 60px;
} */

.input_box {
  margin-bottom: 30px;
}
.envelope {
  height: 30px;
}

.alert-container {
  margin-top: 100px !important;
  padding: 20px !important;
}
.alert {
  width: 500px !important;
}
</style>
