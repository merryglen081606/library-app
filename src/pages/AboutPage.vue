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
        
       
  
          <b-container fluid class="hero">
            <h1 class="title d-flex justify-content-center">About Us</h1>
       <p  class="description  d-flex justify-content-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br> sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
             
  
              <div class="boxs">
              <div class="box">
                <img src="../assets/image/lib100.jpg" alt="" class="about" />
                <p class="capp">SEARCH BOOKS</p>
                <p class="caps">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</p>
            
              </div>
              <div class="box">
                <img src="../assets/image/lib111.jpg" alt="" class="about" />
                <p class="capp">READ BOOKS</p>
                <p class="caps">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</p>
              
              </div>
              <div class="box">
                <img src="../assets/image/lib99.jpg" alt="" class="about" />
                <p class="capp">BORROW BOOKS</p>
                <p class="caps">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</p>
              </div>
              <div class="box">
                <img src="../assets/image/lib88.jpg" alt="" class="about" />
                <p class="capp">BORROW BOOKS</p>
                <p class="caps">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor incididunt</p>
              </div>
            </div>
          </b-container>
     
  
        </b-container>
    </body>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Poppins&display=swap');
  * {
    padding: 0;
    margin: 0;
  }
  .body-container{
  padding: 0px !important;
  height: 100vh !important;
}
.her{
    height: 100vh;
    width: 100%;
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
  .hero{
    height: 100vh !important;
    width: 100%;
   
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

  .boxs {
    justify-content: center;
    justify-content: space-evenly;
    display: flex;
    padding-bottom: 50px;
    padding-top: 50px;
    padding-right: 1.5%;
    padding-left: 1.5%;
    width: 100%;
  }
  .box {
    margin-top: 10px;
    height: 280px;
    width: 560px;
  
    margin-right: 2%;
    margin-left: 2%;
    /* border: 1px solid #11101d; */
    /* outline-style: solid;
    outline-color: #11101d;
    outline-width: bolder; */
    border-radius: 10px;
  
    margin-bottom: 20px;
  }
  .capp {
    font-size: 120%;
    color: #ffffff;
    padding-top: 10px;
    font-weight: bolder;
    color:   #04104d;
    text-align: center;
    border-bottom: dashed 3px #04104d;
   width: auto;
   

  }
  .caps {
    font-size: 100%;
    color: #ffffff;
    padding-top: 10px;
    font-weight: bolder;
    color:   #04104d;
    text-align: center;
    padding-bottom: 5%;

   

  }
  .about {
    align-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 120%;
    border-radius: 5%;
 
    border: 5px solid #04104d;
  }

  </style>
  