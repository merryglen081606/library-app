<template>
  <body>
    <section fluid id="library">
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

      <div fluid class="about-lib">
        <b-row class="AB">
          <b-col class="RCAPS">
            <div class="caps">
              <span class="lou">Lou Geh </span><span> Library</span>
              <br />
            </div>
            <p class="geh">
              We are Build for books and for Readers. Find the RightResources
              <br />with Better Choice. In Lou Geh Library you can experience
              the better option of books to read and borrow.
              <br />
            </p>
            <!-- <b-button style="font-size:17px; font-weight:bolder;" class="bt" squared variant="outline-warning">About Library
                                <b-icon  icon="arrow-right" scale="1.3" class="icon"></b-icon>
                              </b-button> -->
          </b-col>
          <b-col>
            <img
              src="../assets/image/lib-background2.jpeg"
              alt=""
              class="lib1"
            />
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- <section class="banner"></section> -->
    <section fluid class="content-library">
      <!-- <p  class="content"><span class="d-flex justify-content-center">OUR  SERVICES</span></p> -->
      <div class="boxs">
        <div class="box">
          <img src="../assets/image/card2.png" alt="" class="about" />
          <p class="capp">Can Borrow Books</p>
        </div>
        <div class="box">
          <img src="../assets/image/card3.png" alt="" class="about" />
          <p class="capp">Can Read All Available Books</p>
        </div>
        <div class="box">
          <img src="../assets/image/card6.png" alt="" class="about" />
          <p class="capp">Can Search Books</p>
        </div>
      </div>
    </section>

    <section fluid class="handle">
      <b-row>
        <p class="caption"><span class="txt">BOOK CARE RULES</span></p>
        <b-col style="width: 100%">
          <img
            src="../assets/image/lib-background6.jpeg"
            alt=""
            class="handle-book"
          />
        </b-col>
        <b-col>
          <div class="handle-text">
            <div class="handle-title">
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Handle all books with care and respect.
              </div>
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Be responsible and return books on time.
              </div>
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Protect your books.
              </div>
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Keep your books clean.
              </div>
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Always use bookmark.
              </div>
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Always use bookmark.
              </div>
              <div class="handle1">
                <b-icon
                  icon="caret-right-square"
                  scale="1.3"
                  class="rule-con"
                ></b-icon>
                Always use bookmark.
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
  </body>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scope>
* {
  padding: 0;
  margin: 0;
}
/* #library{
  background: url(../assets/image/lib-background2.jpeg);
  float: right;
  background-size: cover;
  background-position: center;

 
} */
.navs {
  padding-top: 15px;
  background-color: #11101d;
  padding-bottom: 15px;
  position: sticky;
}
body {
  background-color: #ffffff;
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

/*ABOUT LOUGEH CSS */
.about-lib {
  width: 100%;
  padding-top: 10px;
  background-color: #ffffff;
  padding-bottom: 5px;
}
/* .AB{
  width: 100%;
  height: 60%;

}
.RCAPS{
  width: 50%;
} */
.caps {
  align-content: center;
  display: flex;
  float: left;
  font-family: montserrat;
  font-size: 50px;
  font-weight: 900;
  padding-top: 10%;
  padding-left: 5%;
}
.lou {
  color: #11101d;
}
.lib1 {
  float: right;
  padding-top: 0px;
  padding-right: 10px;
  height: 100%;
  width: 100%;
  display: flex;
}
.geh {
  font-size: 18px;
  color: #11101d;
  float: left;
  font-weight: bolder;
  padding-left: 5%;
}
.caps {
  font-family: montserrat;
}

.backg {
  width: 100%;
  height: 250px;
}
.boxs {
  justify-content: center;
  justify-content: space-evenly;
  display: flex;
  padding-bottom: 50px;
  padding-top: 50px;
  padding-right: 1.5%;
  padding-left: 1.5%;
}
.box {
  margin-top: 10px;
  height: 250px;
  width: 500px;

  margin-right: 2%;
  margin-left: 2%;
  /* border: 1px solid #11101d; */
  /* outline-style: solid;
  outline-color: #11101d;
  outline-width: bolder; */
  border-radius: 10px;

  margin-bottom: 20px;
}
.content {
  font-weight: 900;
  text-align: center;
  font-size: 40px;
  margin-top: 30px;
  font-family: montserrat;
  margin-bottom: 10px;
}
.txt {
  font-weight: 900;
  text-align: center;
  font-size: 40px;
  color: #11101d;
}

/* .banner {
  width: 100%;
  background: linear-gradient(to top, #a4a2ba 30%, #292648 90%) no-repeat;
  height: 5px;
} */
.about {
  align-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
}
.about1 {
  padding-top: 10px;
  padding-left: 20px;
  width: 360px;
  height: 340px;
}
.contianer {
  margin-top: 10px;
}
.about-text {
  padding-top: 50px;
  padding-left: 20px;
}

.capp {
  font-size: 120%;
  color: #ffffff;
  padding-top: 10px;
  font-weight: bolder;
  color: #11101d;
  text-align: center;
  padding-bottom: 10px;
}
span {
  color: #eeb34b;
  font-family: montserrat;
  padding-left: 5px;
}
.caps {
  color: #ffffff;
  font-size: 90px;
  font-weight: bolder;
  padding-top: 90px;
}

.bt {
  height: 50px;
  margin-left: 500px;
  width: 220px;
}
.icon {
  margin-left: 10px;
}
.bt:hover {
  padding-left: 40px;
}
/* handlebook */
.caption {
  text-align: center;
}
.handle {
  width: 100%;
  height: 50vh;
}
.handle-book {
  width: 720px;
  height: 380px;
  float: right;
  padding-right: 30px;
}
.handle1 {
  font-size: 20px;
  font-weight: bolder;
  padding-bottom: 15px;
  padding-left: 20px;
}
.handle1:hover {
  padding-right: 50px;
}
.cntnt {
  font-size: 20px;
  font-weight: 700;
  color: #11101d;
}
.handle1 {
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 10px;
}
.rule-con {
  margin-right: 15px;
}
.handle-title {
  margin-top: 40px;
}
.handle1:hover {
  padding-left: 50px;
  color: #eeb34b;
}

/*HANDLE BOOKS */

/* @media(max-width:1079px){
    .navbar-brand{
     display: none;
    }
  }
  @media (max-width:695px){
    .lou-geh{
      margin-left: 20px;
}
nav{
  padding-left:2%;
}
.navs{
  background-color: #11101d;
}
.bt{
  margin-left:140px;
}
  }

@media(max-width: 586px){
  nav{
  padding-left:1%;
}

.bt{
  margin-left:140px;
}
}
@media (max-width: 533px){
  nav ul li  {
  padding: 5px 5px;

}
.bt{
  margin-left:140px;
}
} */

@media only screen and (max-width: 1020px) and (min-width: 475px) {
  nav {
    padding-left: 0px;
  }
}
@media only screen and (max-width: 909px) and (min-width: 475px) {
  .navs {
    padding-left: 0%;
    padding-right: 0%;
  }

  .navbar-brand {
    display: none;
  }
  .navs {
    padding-top: 15px;
    background-color: #11101d;
    padding-bottom: 15px;
    height: 75px;
    padding-left: 0px;
  }
}
</style>
