<template>
  <body>
    <div>
      <NavBar />
    </div>
    <section>
      <div class="main_div">
        <div class="title">Login Account</div>
        <form action="#">
          <div class="input_box">
            <input type="text" placeholder="Username" required />
            <b-icon
              class="icon"
              animation="fade"
              icon="people-fill"
              font-scale="2"
            ></b-icon>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Password" required />
            <b-icon
              class="icon"
              animation="fade"
              icon="unlock-fill"
              font-scale="2"
            ></b-icon>
          </div>
          <div class="input_box button">
            <input type="submit" value="Login" />
          </div>
          <div class="sign_up">Not a member? <a href="#">Contact Admin</a></div>
        </form>
      </div>
    </section>
  </body>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "SearchPage",
  component: {
    NavBar,
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

form {
  margin-top: 25px;
}
form .input_box {
  height: 50px;
  width: 100%;
  position: relative;
  margin-top: 15px;
}
.input_box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-left: 70px;
  font-size: 17px;
  transition: all 0.3s ease;
}
.input_box input:focus {
  border-color: #0639b9;
}
.input_box .icon {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: black;
}

.button input {
  padding-left: 0;
  background: blue;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s linear;
}
.button input:hover {
  background: #30a1ed;
}
form .sign_up {
  text-align: center;
  margin-top: 25px;
}
.sign_up a {
  color: blue;
}
form a {
  text-decoration: none;
}
form a:hover {
  text-decoration: underline;
}
.navbar {
  background-color: #ffffff;
  height: 90px;
}
</style>