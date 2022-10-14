<template>
  <b-container fluid id="hero">
    <b-col class="cl">
      <div class="navigation">
        <SidebarComponent />
      </div>
    
    </b-col>
      <b-row class="rw">
        <HeaderCom title="Boook Sub-Category" />
      </b-row>
    <b-row>
      
      <div fluid class="main-tab">
        
        <b-col fluid class="cd">
          <div class="contents">
            <b-card bg-variant="light" class="cards">
              <div class="title">Book Category Records</div>
              <!--Start  Modal Insert Data Code-->
              <template>
                <div>
                  <b-button
                    variant="dark"
                    class="selectbtn"
                    v-b-modal.modal-prevent-closing
                    >Add New</b-button
                  >
                  <b-button
                    class="selectbtn"
                    squared
                    variant="outline-secondary"
                    to="/copies"
                    ><b-icon icon="journal-bookmark-fill"></b-icon> Book
                    Copy</b-button
                  >
                  <b-button
                    class="selectbtn"
                    squared
                    variant="outline-secondary"
                    to="/shelves"
                  >
                    <b-icon icon="bookshelf"></b-icon> Book Shelf</b-button
                  >
                  <b-button
                    class="selectbtn"
                    squared
                    variant="outline-secondary"
                    to="/category"
                    ><b-icon icon="book-half"></b-icon> Book Category</b-button
                  >

                  <b-form-fieldset
                    style="float: right; padding-bottom: 10px"
                    class="col-4"
                  >
                    <b-input
                      v-model="filter"
                      placeholder="Type here to Search..."
                    ></b-input>
                  </b-form-fieldset>
                  <b-modal
                    hide-footer
                    id="modal-prevent-closing"
                    size="m"
                    ref="modal"
                    title="Register Librarian"
                  >
                    <form ref="form" v-on:submit.stop.prevent="subcatSubmit">
                      <b-form-group label="Name" label-for="name-input">
                        <b-form-input
                          id="BookTitle-input"
                          v-model="$v.name.$model"
                          :class="{
                            'is-invalid': validationStatus($v.name),
                          }"
                        >
                        </b-form-input>
                        <div v-if="!$v.name.required" class="invalid-feedback">
                          The Sub-category field is required.
                        </div>
                      </b-form-group>

                      <div class="buttons">
                        <b-button class="btn-success" @click="subcatSubmit()"
                          >Submit</b-button
                        >
                        <b-button class="close" href="/books">Close</b-button>
                      </div>
                    </form>
                  </b-modal>
                </div>
              </template>
              <!--End  Modal Insert Code-->

              <!--Start  DataTable Code-->
              <b-table
                responsive
                striped
                bordered
                hover
                id="my-table"
                :items="items"
                :filter="filter"
                :fields="fields"
                primary-key
                label-sort-asc=""
                label-sort-desc=""
                label-sort-clear=""
                :per-page="perPage"
                :current-page="currentPage"
              >
                <template v-slot:cell(Action)="data">
                  <router-link
                    tag="button"
                    :to="'/editsubcategory/' + data.item.subcategoryID"
                    class="btn btn-success edits"
                  >
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>
                </template>
              </b-table>
              <!--End  DataTable Code-->

              <b-pagination
                v-model="currentPage"
                pills
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>

              <p class="mt-3">Current Page: {{ currentPage }}</p>
            </b-card>
          </div>
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent.vue";
// import axios from "axios";
import HeaderCom from "../layout/HeaderCom.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CategoryPage",

  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      name: "",
      Action: "",
      // Status: "",
      fields: [
        { key: "subcategoryID", label: "Sub-category ID", sortable: true },
        { key: "name", label: "Sub category Name", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ items: "subcategory" }),

    rows() {
      return this.items.length;
    },
  },

  async mounted() {
    return await this.$store.dispatch("fetchSubcategory");
  },

  validations: {
    name: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async subcatSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookSubCatList);
        this.$store.dispatch("subcatSubmit", {
          name: this.name,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },

  components: { SidebarComponent, HeaderCom },
};
</script>
<style scoped>
.main-tab {
  padding-left: auto;
}
.header {
  margin-top: 10px;
  margin-left: auto;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  width: 80%;
  height: 60px;
  background-color: #11101d;
  border-radius: 10px;
  color: #ffffff;
}
.contents {
  padding-left: 310px;
  padding-right: 10px;
  margin-top: 20px;
  margin-left: auto;
}

.cards {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.title {
  text-align: center;
  color: #11101d;
  font-family: monospace;
  font-weight: bolder;
  font-size: 30px;
}
.rw {
  margin-left: 16%;
  width: 100%;
}
.main-tab .header h4 {
  font-family: montserrat;
  color: rgb(240, 240, 240);
  padding-top: 3px;
}
.main-tab h4 span {
  color: #eeb34b;
  font-family: montserrat;
}
.button {
  padding: 50px;
}
.button .btn {
  width: auto;
}
h1 {
  text-align: center;
  color: #11101d;
}
.main .content {
  width: 80%;
  margin-right: 20px;
  margin-left: 90px;
}
.rw {
  margin-left: 16%;
  width: 100%;
}
.btn {
  margin-bottom: 10px;
}
.buttons {
  float: right;
}
.close {
  margin-left: 10px;
}
@media (max-width: 1284px) {
  .header {
    width: 76%;
  }
}
@media (max-width: 1174px) {
  .header {
    margin-left: 90px;
    width: 90%;
  }
  .contents {
    padding-left: 90px;
    padding-right: 20px;
  }
}
@media (max-width: 759px) {
  .header {
    margin-left: 90px;
    width: 87%;
    padding-right: 30px;
  }
}
@media (max-width: 501px) {
  .header {
    margin-left: 90px;
    width: 80%;
    padding-right: 30px;
  }
}
.selectbtn {
  margin-right: 5px;
}
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
</style>
