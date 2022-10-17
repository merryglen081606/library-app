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
import AboutPage from "../pages/AboutPage.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import EditLibrarian from "../pages/EditLibrarian.vue";
import PageVue from "../pages/PageVue.vue";
import ShelvesPage from "../pages/ShelvesPage.vue";
import SubcatPage from "../pages/SubcatPage.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import EditAccount from "../pages/EditAccount.vue";
import EditReader from "../pages/EditReader.vue";
import EditBook from "../pages/EditBook.vue";
import EditBorrower from "../pages/EditBorrower.vue";
import EditPublisher from "../pages/EditPublisher.vue";
import EditAuthor from "../pages/EditAuthor.vue";
import EditBookCopy from "../pages/EditBookCopy.vue";
import EditShelf from "../pages/EditShelf.vue";
import EditCategory from "../pages/EditCategory.vue";
import EditSubCategory from "../pages/EditSubCategory.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: "/aboutpage",
        name: "AboutPage",
        component: AboutPage,
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
        path: "/editreader/:ReaderID",
        name: "EditReader",
        component: EditReader,
    },
    {
        path: "/editbook/:bookID",
        name: "EditBook",
        component: EditBook,
    },
    {
        path: "/edittransaction/:BorrowerID",
        name: "EditBorrower",
        component: EditBorrower,
    },
    {
        path: "/editpublisher/:publisherID",
        name: "EditPublisher",
        component: EditPublisher,
    },
    {
        path: "/editauthor/:AuthorID",
        name: "EditAuthor",
        component: EditAuthor,
    },
    {
        path: "/editbookcopy/:copyID",
        name: "EditBookCopy",
        component: EditBookCopy,
    },
    {
        path: "/editshelf/:shelfID",
        name: "EditShelf",
        component: EditShelf,
    },
    {
        path: "/editcategory/:categoryID",
        name: "EditCategory",
        component: EditCategory,
    },
    {
        path: "/editsubcategory/:subcategoryID",
        name: "EditSubCategory",
        component: EditSubCategory,
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
