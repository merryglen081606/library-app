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
                  ><router-link to="/aboutpage" class="nav-link" exact
                    >About</router-link
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
     
      <b-row class="">
      
        <b-col class="d-flex login-form justify-content-end">
          <b-form class="form" v-on:submit.stop.prevent="handleSubmit">
            <h2>Login Account</h2>
            <h1>Welcome to Lou Geh Library System</h1>
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
                  type="password"
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
                class="logbtn"
                @click="handleSubmit()"
                onClick="refreshPage()"
                >Login</b-button
              >
              <!-- <img src="../assets//login.jpg" alt="" class="login" /> -->
              <!--<iput href="./books" type="submit" value="Login" />-->
              <!--<router-link to="./books" type="submit" exact value="Login"></router-link>-->
            </b-form-group>
          </b-form>
     
        </b-col>
        <b-col>
          <img
           src="../assets/image/lib4.jpeg"
           alt=""
           class="left-image"
         />
        </b-col>
          <div class="alert-container d-flex justify-content-center">
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
      </b-row>
      <!-- <v-container>
            <v-form>
              <v-text-field v-model="loginInfo.Username" label="Username"/>
                <v-text-field v-model="loginInfo.Password" label="Passwword"/>
            </v-form>
          </v-container> -->

 
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
/* body {
  height: 100vh;
  
} */
.navs {
  padding-top: 15px;
  background-color: #04104d;
  padding-bottom: 15px;
  position: sticky;
}
nav {
  align-items: center;
  justify-content: space-between;
  float: right;
  padding-left: 10%;
  padding-right: 10%;
  position: sticky;
}

nav ul li {
  display: inline-block;
  list-style-type: none;
  padding: 0px 20px;
}
.nav-item .nav-link {
  font-family: montserrat;
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
  padding-right: 10px;
  color: #ffffff;
}
nav ul .nav-item a.router-link-active {
  color: #ffffff;
  font-weight: bolder;
  border: 1px solid #eeb34b;
  outline-style: solid;
  outline-color: #eeb34b;
  outline-width: thin;
  width: 100px;
}
ul {
  padding-left: 2rem;
  padding-top: 8px;
}

#libra {
  /* background: url(../assets/image/lib-background.jpeg); */
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100vh;
  
}

.login {
  width: 100%;
  align-content: center;
  display: flex;
  text-align: center;
}
.form {
  width: 50%;
  height: 440px;
  background-color:  #555e8b;;
  /* align-content: center; */
  margin-top: 10%;
  /* margin-left: 30%; */
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  padding-bottom: 20px;
  align-content: center;
  box-shadow: 0 8px 8px -4px lightblue;
  float: right;
  margin-right: 90px;


}
/* .input{
height: 45px;
width: 60px;
} */

.input_box {
  margin-bottom: 30px;
  border-radius: 30px;
}
.envelope {
  height: 30px;
}

.alert-container {
  /* margin-top: 100px !important; */
  padding-right: 20px !important;
  margin-top: 10px;
 
}
.alert {
  width: 500px !important;
  height: 60px;
 
 

}
h2 {
  font-size: 45px;
  font-weight: bolder;
  padding-bottom: 10px;
  color: #eeee;
  text-align: center;
}
h1 {
  font-size: 16px;
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 30px;
  color: #eeee;
  text-align: center;
}
.logbtn {
  width: 100%;
  height: 40px;
}

.left-image{
  /* float: left; */
padding-top: 30px;
    height: 100%;
    bottom: 2px;
    width: 100%;
}
</style>
