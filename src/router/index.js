import Vue from "vue";
import VueRouter from "vue-router";
import LibrarianPage from "../pages/LibrarianPage.vue";
import BookPage from "../pages/BookPage.vue";
import CopyPage from "../pages/CopyPage.vue";
import ReaderPage from "../pages/ReaderPage.vue";
import AddLibrarian from "../pages/AddLibrarian.vue";
import BorrowPage from "../pages/BorrowPage.vue";
import AccountPage from "../pages/AccountPage.vue";
import PublisherPage from "../pages/PublisherPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
import AuthorPage from "../pages/AuthorPage.vue";
import CityPage from "../pages/CityPage.vue"
import HomePage from "../pages/HomePage.vue"
import SearchPage from "../pages/SearchPage.vue"
import LoginPage from "../pages/LoginPage.vue"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);

const routes = [
    {
        path: "/librarians",
        name: "LibrarianPage",
        component: LibrarianPage,
    },
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
        name: "AddLibrarian",
        component: AddLibrarian,
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
    {
        path: "/account",
        name: "AccountPage",
        component: AccountPage,
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
        path: "/home",
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
    }


];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
