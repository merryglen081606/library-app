<template>
  <body>
    <div class="side">
      <div class="navigation">
        <h4 class="sidebar-title"><span></span></h4>

        <img src="../assets/LOGO1.png" alt="" class="lou-geh" />
      </div>
      <nav class=" sidebar">
        <b-nav vertical>
          <!-- <router-link to="/homevue" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-circle"
              aria-hidden="true"
            ></b-icon>
              <span class="text"> Home</span>
          </router-link> -->
          <router-link to="/account" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-circle"
              aria-hidden="true"
            ></b-icon>
            <span class="text">Account</span>
          </router-link>

          <router-link to="/librarians" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="text">Librarian</span>
          </router-link>

          <router-link to="/books" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="journal-bookmark-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="text">Book</span>
          </router-link>

          <router-link to="/readers" class="nav-link" exact>
            <b-icon class="mr-3" icon="people-fill" aria-hidden="true"></b-icon>
            <span class="text">Reader</span>
          </router-link>

          <router-link to="/borrow" class="nav-link" exact>
            <b-icon class="mr-3" icon="folder-plus" aria-hidden="true"></b-icon>
            <span class="text">Transaction</span>
          </router-link>

          <router-link to="/publisher" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="file-earmark-person"
              aria-hidden="true"
            ></b-icon>
            <span class="text">Publisher</span>
          </router-link>

          <router-link to="/author" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="text">Author</span>
          </router-link>

          <!-- <b-navbar-brand class="link" href="#">
            <div>
              <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
              Utilities

              <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                  <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                  <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
              </b-navbar-toggle>
            </div>
            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">City</b-nav-item>
                <b-nav-item href="#">Category</b-nav-item>
                <b-nav-item href="#">Subcategory</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar-brand> -->
          <button @click.prevent="handleClick" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="door-open-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="text">Logout</span>
          </button>
        </b-nav>
      </nav>
    </div>
  </body>
</template>

<script>
export default {
  name: "SidebarComponent",
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.side {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background: #11101d;
}

.lou-geh {
  justify-content: center;
  height: 240px;
  width: 240px;
  margin-top: 10px;
  margin-left: 30px;
}
.sidebar-title {
  color: #fff;
  font-weight: bolder;
  margin-top: 5px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
span {
  color: #eeb34b;
  font-family: montserrat;
  align-items: center;
  justify-content: center;
}
.sidebar {
  margin-top: 30px;
}
.nav-link {
  color: #fff;
}
.nav-link .text {
  font-family: montserrat;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-left: 15px;
  font-size: 20px;
  font-weight: 900;
}

.sidebar .nav-link {
  color: #fff;
  align-items: center;
  justify-content: center;
  display: block;
  padding: 12px;
  font-weight: 900;
  letter-spacing: 3px;
  padding-left: 60px;
  font-size: 17px;
}
.sidebar .nav-link:hover {
  background-color: #eeb34b;
  border-radius: 7px !important;
  /* padding-left: 80px; */
  color: black;
  width: 250px;
  padding-left: 10px;
}
.sidebar a.router-link-active {
  background-color: #eeb34b;
  border-radius: 7px !important;
  padding-left: 10px;
  color: black;
  /* width: 390px; */
  width: 250px;
}
.mr-3 {
  margin-right: 5px;
}
.sidebar .link {
  color: #fff;
  align-items: center;
  justify-content: center;
  display: block;
  padding: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  padding-left: 40px;
}

/* .sidebar .link {

  border-radius: 7px !important;
  padding-left: 0px;
  color: black;
  width: 270px;
  padding-left: 0px;
} */

@media (max-width: 1200px) {
  .side {
    width: 70px;
  }
  .sidebar .nav-link {
    display: block;

    padding-left: 15px;
  }

  .sidebar .nav-link:hover {
    background-color: #eeb34b;
    border-radius: 0px !important;
    padding-left: 5px;
    color: black;
    width: 70px;
  }
  .sidebar a.router-link-active {
    background-color: #eeb34b;
    border-radius: 0px !important;
    padding-left: 5px;
    color: black;
    width: 70px;
  }
  /* .sidebar span .text:hover {
  background-color: #eeb34b;
  border-radius: 7px !important;
  padding-left: 5px;
  color: black;
  width: 70px;

} */

  .lou-geh {
    /* display: none; */
    justify-content: center;
    height: 70px;
    width: 70px;
    margin-top: 10px;
    margin-left: 0px;
  }
  .mr-3 {
    float: left;
    width: 40px;
    height: 20px;
  }
  span {
    display: none;
  }
}

@media (max-width: 592px) {
  .side {
    width: 70px;
  }
  .sidebar .nav-link {
    display: block;

    padding-left: 15px;
  }

  .sidebar .nav-link:hover {
    background-color: #eeb34b;
    border-radius: 0px !important;
    padding-left: 5px;
    color: black;
    width: 70px;
  }
  .sidebar a.router-link-active {
    background-color: #eeb34b;
    border-radius: 0px !important;
    padding-left: 5px;
    color: black;
    width: 70px;
  }
  .lou-geh {
    /* display: none; */
    justify-content: center;
    height: 70px;
    width: 70px;
    margin-top: 10px;
    margin-left: 0px;
  }
  .mr-3 {
    float: left;
    width: 40px;
    height: 20px;
  }
  span {
    display: none;
  }
}
</style>
