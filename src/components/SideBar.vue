<template>
  <body>
    <div class="sdbar">
      <div class="navigation">
        <h4 class="sidebar-title"><span></span></h4>

        <img src="../assets/LOGO1.png" alt="" class="lou-geh" />
      </div>
      <nav class="mb-2 sidebar">
        <b-nav vertical>
          <router-link to="/account" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-circle"
              aria-hidden="true"
              v-b-tooltip.hover.right="'Tooltip!'"
            ></b-icon>
            <span class="item">Accounts</span>
          </router-link>

          <router-link to="/librarians" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="person-lines-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="item">Librarians</span>
          </router-link>

          <router-link to="/books" class="nav-link" exact>
            <b-icon
              class="mr-3"
              icon="journal-bookmark-fill"
              aria-hidden="true"
            ></b-icon>
            <span class="item">Books</span>
          </router-link>

          <router-link to="/readers" class="nav-link" exact>
            <b-icon class="mr-3" icon="people-fill" aria-hidden="true"></b-icon>
            <span class="item">Reader</span>
          </router-link>

          <router-link to="/borrow" class="nav-link" exact>
            <b-icon class="mr-3" icon="folder-plus" aria-hidden="true"></b-icon>
            <span class="item">Transactions</span>
          </router-link>
          <router-link to="/author" class="nav-link" exact>
            <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
            <span class="item">Author</span>
          </router-link>
          <router-link to="/publisher" class="nav-link" exact>
            <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
            <span class="item">Publisher</span>
          </router-link>
          <!-- <router-link to="/"  @click="handleClick" class="nav-link" exact>
            <b-icon class="mr-3"  icon="stack" aria-hidden="true"></b-icon>
            <span class="item">Logout</span>
          </router-link> -->

          <a href="javascript:void(0)" @click="handleClick" class="log"
            >Logout</a
          >
        </b-nav>
      </nav>
    </div>
  </body>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    handleClick() {
      // this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.sdbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 280px;
  background: #11101d;
}

.lou-geh {
  justify-content: center;
  height: 180px;
  width: 180px;
  margin-top: 10px;
  margin-left: 30px;
}
.sidebar-title {
  margin-top: 5px;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.sidebar {
  margin-top: 30px;
}
.item {
  color: white;
}

.sidebar .nav-link {
  color: #fff;
  align-items: center;
  justify-content: center;
  display: block;
  padding: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  padding-left: 30px;
  font-size: 18px;
}
.sidebar .nav-link:hover {
  background-color: #eeb34b;
  padding-left: 60px;
  color: black;
  width: 280px;
}

.sidebar a.router-link-active {
  background-color: #eeb34b;
  padding-left: 60px;
  color: black;
  width: 280px;
}
.mr-3 {
  margin-right: 20px;
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
.log {
  padding-left: 10px;
  color: white;
  font-size: 15px;
  font-weight: 700px;
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
