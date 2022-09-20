<template>
  <body>
    <div>
      <b-row id="header" class="d-flex fixed-top justify-content-center">
        <b-navbar type="dark" variant="dark">
          <a
            class="navbar-brand"
            style="
              font-size: 30px;
              font-weight: bolder;
              font-family: montserrat;
              color: #ffffff;
              padding-left: 210px;
            "
            href="#"
            >Lou Geh<span style="color: #eeb34b; font-family: montserrat">
              Library System</span
            ></a
          >
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 bg-dark">
              <li class="nav-item">
                <router-link to="/" class="nav-link" exact>Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/search" class="nav-link" exact
                  >Search</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link" exact
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/login"
                  class="btn btn-outline-success"
                  role="button"
                  style="
                    font-family: montserrat;
                    font-size: 20px;
                    font-weight: 900;
                    border-radius: 30px;
                    color: #ffffff;
                  "
                  exact
                  >CONTACT US</router-link
                >
              </li>
            </ul>
          </div>
        </b-navbar>
      </b-row>
    </div>
    <section>
      <div class="main_div">
        <div class="title">Login Account</div>
        <b-form class="form" @submit.prevent="handleSubmit">
          <b-form-group class="input_box">
            <b-form-input
              class="input"
              type="text"
              v-model="Username"
              placeholder="Username"
              required
            />
            <b-icon
              class="icon"
              animation="fade"
              icon="people-fill"
              font-scale="1.5"
            ></b-icon>
          </b-form-group>
          <b-form-group class="input_box">
            <b-form-input
              class="input"
              type="password"
              v-model="Password"
              placeholder="Password"
              required
            />
            <b-icon
              class="icon"
              animation="fade"
              icon="unlock-fill"
              font-scale="1.5"
            ></b-icon>
          </b-form-group>
          <b-form-group class="input_box button">
            <b-button class="input" type="submit">Login</b-button>
            <!--<iput href="./books" type="submit" value="Login" />-->
            <!--<router-link to="./books" type="submit" exact value="Login"></router-link>-->
          </b-form-group>
          <div class="sign_up">Not a member? <a href="#">Contact Admin</a></div>
        </b-form>
      </div>
    </section>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  component: {},
  data() {
    return {
      Username: "",
      Password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://localhost:5000/api/accounts/login",
        {
          Username: this.Username,
          Password: this.Password,
        }
      );
      localStorage.setItem("token", response.data.token);
      this.$router.push("/books");
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: grid;
  height: 100vh;
  place-items: center;
  background-image: url(../../src/assets/image/image18.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.main_div {
  width: 365px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 140px;
}
.main_div .title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}

.form {
  margin-top: 25px;
}
.form .input_box {
  height: 50px;
  width: 100%;
  position: relative;
  margin-top: 5px;
}
.input_box .input {
  height: 100%;
  width: 100%;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-left: 70px;
  font-size: 20px;
  transition: all 0.3s ease;
}
.input_box .input:focus {
  border-color: #0639b9;
}
.input_box .icon {
  position: absolute;
  top: 35%;
  left: 15px;
  transform: translateY(-50%);
  color: black;
}

.button .input {
  padding-left: 0;
  background: blue;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s linear;
}
.button .input:hover {
  background: #30a1ed;
}
.form .sign_up {
  text-align: center;
  margin-top: 25px;
}
.sign_up a {
  color: blue;
}
.form a {
  text-decoration: none;
}
.form a:hover {
  text-decoration: underline;
}
.navbar {
  background-color: #ffffff;
  height: 75px;
}
.nav-item {
  padding-right: 40px;
  justify-content: center;
}
.nav-item .nav-link {
  font-family: montserrat;
  font-size: 20px;
  font-weight: 900;
  padding-left: 40px;
  padding-right: 40px;
  color: #ffffff;
}
</style>
