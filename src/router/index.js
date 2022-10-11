import Vue from "vue";
import VueRouter from "vue-router";
import LibrarianPage from "../pages/LibrarianPage.vue";
// import LibPage from "../pages/LibPage.vue";
import BookPage from "../pages/BookPage.vue";
import CopyPage from "../pages/CopyPage.vue";
import ReaderPage from "../pages/ReaderPage.vue";
import AddAccount from "../pages/AddAccount.vue";
import BorrowPage from "../pages/BorrowPage.vue";
// import AccountPage from "../pages/AccountPage.vue";
import PageAccount from "../pages/PageAccount.vue";
import PublisherPage from "../pages/PublisherPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
import AuthorPage from "../pages/AuthorPage.vue";
import CityPage from "../pages/CityPage.vue";
import HomePage from "../pages/HomePage.vue";
import SearchPage from "../pages/SearchPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import HomeVue from "../pages/HomeVue.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import EditLibrarian from "../pages/EditLibrarian.vue";
import PageVue from "../pages/PageVue.vue";
import ShelvesPage from "../pages/ShelvesPage.vue";
import SubcatPage from "../pages/SubcatPage.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import EditAccount from "../pages/EditAccount.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/homevue",
        name: "HomeVue",
        component: HomeVue,
    },
    {
        path: "/librarians",
        name: "LibrarianPage",
        component: LibrarianPage,
    },
    // {
    //     path: "/librarians",
    //     name: "LibPage",
    //     component: LibPage,
    // },
    {
        path: "/books",
        name: "BookPage",
        component: BookPage,
    },
    {
        path: "/copies",
        name: "CopyPage",
        component: CopyPage,
    },
    {
        path: "/add-librarian",
        name: "AddAccount",
        component: AddAccount,
    },
    {
        path: "/readers",
        name: "ReaderPage",
        component: ReaderPage,
    },
    {
        path: "/borrow",
        name: "BorrowPage",
        component: BorrowPage,
    },
    // {
    //     path: "/account",
    //     name: "AccountPage",
    //     component: AccountPage,
    // },
    {
        path: "/account",
        name: "PageAccount",
        component: PageAccount,
    },
    {
        path: "/publisher",
        name: "PublisherPage",
        component: PublisherPage,
    },
    {
        path: "/dasboard",
        name: "DashboardPage",
        component: DashboardPage,
    },
    {
        path: "/author",
        name: "AuthorPage",
        component: AuthorPage,
    },
    {
        path: "/city",
        name: "CityPage",
        component: CityPage,
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/search",
        name: "SearchPage",
        component: SearchPage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path:"/editaccount/:AccountID",
        name:"EditAccount",
        component: EditAccount,
    },
    {
        path: "/editlibrarian/:UserID",
        name: "EditLibrarian",
        component: EditLibrarian,
    },
    {
        path: "/page",
        name: "PageVue",
        component: PageVue,
    },
    {
        path: "/shelves",
        name: "ShelvesPage",
        component: ShelvesPage,
    },
    {
        path: "/category",
        name: "CategoryPage",
        component: CategoryPage,
    },
    {
        path: "/subcategory",
        name: "SubcatPage",
        component: SubcatPage,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
