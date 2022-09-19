<template>
  <body>
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
              <router-link to="/home" class="nav-link" exact>Home</router-link>
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
  </body>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style scope>
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
