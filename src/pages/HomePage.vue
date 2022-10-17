<template>
  <body>
    <b-container  fluid class="body-container">
    <!-- <section fluid id="library"> -->
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
      <!-- </section> -->
      
        <b-contaainer class="home-page"> 
       <h1 class="title d-flex justify-content-center">Lou Geh Library System</h1>
       <p  class="description  d-flex justify-content-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
       <pre></pre>
         <img
           src="../assets/image/lib00.jpg"
           alt=""
           class="left-image"
         />
        </b-contaainer>


      </b-container>
  </body>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Poppins&display=swap');
* {
  padding: 0;
  margin: 0;
}

.navs {
  padding-top: 15px;
  background-color: #04104d;
  padding-bottom: 15px;
  width: 100%;
  position: fixed;
 
}
nav {
  align-items: center;
  justify-content: space-between;
  float: right;
  padding-left: 10%;
  padding-right: 10%;
 
 
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
.body-container{
  padding: 0px !important;
  height: 100vh !important;
}

.home-page{
  padding: 0px !important;
  height: 100vh !important;
  width: 100% !important;
  justify-content: center;
text-align: center;
padding-bottom: 5%;
}
.title{
  text-align: center;
    color: #04104d;
    font-family: 'Playfair Display', serif;
    font-weight: bolder;
    font-size: 500%;
    padding-top: 10%;

} 
.description{
  font-size: 100%;
  font-weight: lighter;
  position: overlay;
  justify-content: center;
text-align: center;
padding-top: 1%;
padding-bottom: 3%;
font-family: 'Playfair Display', serif;
color: #04104d;
}

.left-image{
  justify-content: center;
    text-align: center;
    height: 50%;
    bottom: 2px;
    width: 100%;
}

</style>
