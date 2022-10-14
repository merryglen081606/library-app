<template>
  <body>
    <div class="sidebar">
      <div class="logo">
        <img src="../assets/LOGO1.png" alt="" class="lou-geh" />
      </div>
      <ul class="nav-bar">
        <li>
          <div class="icon-link">
            <router-link to="/account" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="person-circle"
                aria-hidden="true"
              ></b-icon>
              <span class="link_name">Account</span>
            </router-link>
          </div>
          <!-- <ul class="sub-menu blank">
            <li>
              <router-link to="/librarians" class="link_name" exact
                >Account</router-link
              >
            </li>
          </ul> -->
        </li>
        <li>
          <router-link to="/librarians" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="link_name">Librarian</span>
          </router-link>
        </li>
        <li>
          <div class="icon-link">
            <router-link to="/books" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="journal-bookmark-fill"
                aria-hidden="true"
              ></b-icon>
              <span class="link_name">Book</span>
              <!-- <b-icon
                class="mr-3"
                icon="caret-down"
                aria-hidden="true"
              ></b-icon> -->
            </router-link>
          </div>
     
        </li>
        <li>
          <router-link to="/readers" class="nav-link" exact>
            <b-icon class="mr-3" icon="people-fill" aria-hidden="true"></b-icon>
            <span class="link_name">Reader</span>
          </router-link>
        </li>
        <li>
          <router-link to="/borrow" class="nav-link" exact>
            <b-icon class="mr-3" icon="folder-plus" aria-hidden="true"></b-icon>
            <span class="link_name">Transaction</span>
          </router-link>
        </li>
        <li>
          <router-link to="/publisher" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="file-earmark-person"
              aria-hidden="true"
            ></b-icon>
            <span class="link_name">Publisher</span>
          </router-link>
        </li>
        <li>
          <router-link to="/author" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="link_name">Author</span>
          </router-link>
        </li>
        <li>
          <router-link to="/"  class="nav-link" exact>
          <a href="/" @click="handleClick" class="log">  <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon><span class="link_name">Logout</span></a>
          </router-link>
          
    
        </li>
    
            <!-- <li>
          <router-link to="/" href="/" @click="handleClick"  class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="link_name">Logout</span>
          </router-link>
        </li> -->
        <!-- <a href="/" @click="handleClick" class="log">Logout</a> -->
        <li></li>
      </ul>
    </div>
  </body>
</template>
<script>
export default {
  name: "SidebarComponent",
  methods: {
    handleClick() {
      // this.$router.push("/");
      localStorage.removeItem("token");
      localStorage.removeItem("AccountID");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #11101d;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #11101d;
}
.lou-geh {
  /* display: none; */
  justify-content: center;
  height: 230px;
  width: 230px;
  margin-top: 10px;
  margin-left: 0px;
}
.sidebar .nav-bar {
  height: 100%;
  padding-top: 10px;
}
.sidebar .nav-bar li {
  list-style: none;
  position: relative;
  transition: all 0.4s ease;
}
.sidebar .nav-bar li:hover {
  background: #eeb34b;
  padding-left: 15px;
}
.sidebar .nav-bar li .mr-3 {
  height: 30px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
}
.sidebar .nav-bar li .nav-link {
  text-decoration: none;
  padding-bottom: 10px;
  padding-top: 15px;
}
.sidebar .nav-bar li .nav-link .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}
.sidebar a.router-link-active {
  background-color: #eeb34b;
  padding-left: 15px;
}
@media (max-width: 592px) {
  .sidebar {
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
.nav-link a .link_name{
text-decoration: none;
}
/* .sidebar .nav-bar li .sub-menu {
  background-color: #1d1b31;
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
 
}
.sidebar .nav-bar li .sub-menu .nav-link {
  font-size: 15px;
  padding: 5px 0;
  color: #fff;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-bar li .sub-menu .nav-link:hover {
  opacity: 1;
}
.sidebar.close .nav-bar li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  transition: all 0.4s ease;
  opacity: 0;
  pointer-events: none;
}
.sidebar.close .nav-bar li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  
}
.sidebar.close .nav-bar li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-bar li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-bar li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
}
.sidebar .nav-bar li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
} */
</style>
