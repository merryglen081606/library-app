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

    <section id="about" class="about section-padding">
      <div class="container">
        <div class="front-pic" data-bs-ride="false" style="">
          <img src="../assets/image/image1.jpg" class="image" alt="..." />
        </div>
      </div>

      <div class="about-text" style="margin-top: 60px">
        <br />
        <h2 style="font-size: 40px; margin-top: 80px; font-weight: bolder">
          Lou Geh<span style="color: #eeb34b; font-family: montserrat">
            Library System</span
          >
          <br />
        </h2>
        <p style="font-size: 20px">
          We are Build for books and for Readers. Find the Right Resources with
          Better Choice.<br />
          In Lou Geh Library you can experience the better option of books to
          read and borrow.
          <br />
        </p>
        <a href="#" class="btn btn-warning">View Details</a>
      </div>
    </section>

    <section>
      <div class="">
        <img src="../assets/image/image8.jpg" class="front-pic2" alt="Trulli" />
      </div>
    </section>

    <section class="card-item">
      <b-card style="max-width: 20rem">
        <img src="../assets/image/image13.jpg" class="pic-lib" alt="Trulli" />
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card>

      <b-card style="max-width: 20rem">
        <img src="../assets/image/image10.jpg" class="pic-lib" alt="Trulli" />
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card>

      <b-card style="max-width: 20rem">
        <img src="../assets/image/image12.jpg" class="pic-lib" alt="Trulli" />
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card>
    </section>

    <section class="caption-icon">
      <h1>
        Become one of our reader in
        <span style="color: #eeb34b; font-family: montserrat">
          Lou Geh Library System</span
        >
      </h1>
      <b-row class="icons text-md-center">
        <b-col md="2" class="mb-3">
          <b-icon
            class="icon"
            icon="journal-bookmark-fill"
            animation="throb"
            font-scale="10"
          ></b-icon>
          <p>Can Read Boooks</p>
        </b-col>
        <b-col md="2" class="mb-3">
          <b-icon
            class="icon"
            icon="people"
            animation="fade"
            font-scale="10"
          ></b-icon>
          <p>Register Info</p>
        </b-col>
        <b-col md="2" class="mb-3">
          <b-icon
            class="icon"
            icon="bookmark-check"
            animation="throb"
            font-scale="10"
          ></b-icon>
          <p>Can BorroW Books</p>
        </b-col>
        <b-col md="2" class="mb-3">
          <b-icon
            class="icon"
            icon="search"
            animation="fade"
            font-scale="10"
          ></b-icon>
          <p>Can Search Books</p>
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
.front-pic {
  margin-top: 40px;
  margin-right: 30px;
  float: left;
  margin-bottom: 30px;
}
.front-pic .image {
  height: 300px;
  width: 550px;
  justify-content: center;
  margin-left: 20px;
  display: flex;
}
.front-pic2 {
  width: 100%;
  height: 200px;
}
.card-item {
  margin-left: 400px;
  margin-top: 50px;
}
.card-item .card {
  display: inline-block;
  margin-right: 80px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.pic-lib {
  height: 150px;
  max-width: 18rem;
}
.icon {
  color: #eeb34b;
}
.icons {
  justify-content: center;
  align-items: center;
  width: 100%;
}
.mb-3 p {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 15px;
  color: #ffffff;
}
.caption-icon {
  padding-top: 25px;
  height: 280px;
  width: 100%;
  background-color: #11101d;
  margin-bottom: 20px;
}
.caption-icon h1 {
  font-size: 30px;
  color: #ffffff;
  text-align: center;
}

/*.nav-item {
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
}*/
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