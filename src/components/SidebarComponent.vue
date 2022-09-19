<template>
  <div>
    <div class="nav">
      <div class="side">
        <div class="navigation">
          <h4 class="sidebar-title"><span></span></h4>

          <img src="../assets/LOGO1.png" alt="" class="lou-geh" />
        </div>
        <nav class="mb-2 sidebar">
          <b-nav vertical>
            <router-link
              to="/dasboard"
              class="nav-link align-items-center"
              exact
            >
              <b-icon class="mr-3" icon="grid-fill" aria-hidden="true"></b-icon>
              Dashboard
            </router-link>

            <router-link to="/account" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="person-circle"
                aria-hidden="true"
              ></b-icon>
              Account
            </router-link>

            <router-link to="/librarians" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="person-lines-fill"
                aria-hidden="true"
              ></b-icon>
              Librarian
            </router-link>

            <router-link to="/books" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="journal-bookmark-fill"
                aria-hidden="true"
              ></b-icon>
              Book
            </router-link>

            <router-link to="/copies" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="folder2-open"
                aria-hidden="true"
              ></b-icon>
              Book Copy
            </router-link>

            <router-link to="/readers" class="nav-link" exact>
              <b-icon
                class="mr-3"
                icon="people-fill"
                aria-hidden="true"
              ></b-icon>
              Reader
            </router-link>

            <router-link to="/borrow" class="nav-link" exact>
              <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
              Borrow Book
            </router-link>

            <router-link to="/publisher" class="nav-link" exact>
              <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
              Publisher
            </router-link>

            <router-link to="/author" class="nav-link" exact>
              <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
              Author
            </router-link>
            <router-link to="/login" class="nav-link" exact>
              <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
              Category
            </router-link>

            <router-link to="/login" class="nav-link" exact>
              <b-icon class="mr-3" icon="stack" aria-hidden="true"></b-icon>
              LogIN
            </router-link>
          </b-nav>
        </nav>
        <!--<b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
.side {
  height: 100%;
  background-color: #11101d;
  width: 270px;
  justify-content: center;
  padding: 6px 14px;
  position: sticky;
}
.lou-geh {
  height: 150px;
  width: 150px;
  margin-top: 20px;
  margin-left: 50px;
}
.navigation {
  height: 100%;
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
  margin-top: 50px;
  padding-bottom: 269px;
}
.nav-link {
  color: #fff;
}

.sidebar .nav-link {
  color: #fff;
  align-items: center;
  justify-content: center;
  display: block;
  padding: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  padding-left: 40px;
}
.sidebar .nav-link:hover {
  background-color: #eeb34b;
  border-radius: 7px !important;
  padding-left: 80px;
  color: black;
}
.mr-3 {
  margin-right: 5px;
}
</style>
