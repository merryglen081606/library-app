<template>
  <b-container fluid id="lib">
    <b-col class="cl">
      <div class="navigation">
        <SideBar />
      </div>
    </b-col>
    <b-row>
      <div fluid class="main-tab">
        <b-col>
          <div class="header">
            <h4>Library System/<span>Category</span></h4>
          </div>
        </b-col>

        <b-col fluid class="cd">
          <div class="contents">
            <b-card bg-variant="light" class="cards">
              <div class="title">Book Category Records</div>
              <!--Start  Modal Insert Data Code-->
              <template>
                <div>
                  <b-button v-b-modal.modal-prevent-closing>Add New</b-button>
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
                    <form ref="form" v-on:submit.stop.prevent="categorySubmit">
                      <b-form-group
                        label="Category Name"
                        label-for="categoryName-input"
                      >
                        <b-form-input
                          id="BookTitle-input"
                          v-model="$v.categoryName.$model"
                          :class="{
                            'is-invalid': validationStatus($v.categoryName),
                          }"
                        >
                        </b-form-input>
                        <div
                          v-if="!$v.categoryName.required"
                          class="invalid-feedback"
                        >
                          The Shelfname field is required.
                        </div>
                      </b-form-group>

                      <b-form-group
                        label="Subcategory"
                        label-for="Subcategory-input"
                      >
                        <b-form-input
                          id="b_subcatergoryID-input"
                          v-model="$v.b_subcategoryID.$model"
                         
                        >
                        </b-form-input>
                      
                      </b-form-group>
                       <!-- <select v-model="b_subcategoryID"  name="country" class="form-control" @change="myFunction()">
        <option b_subcategoryID  disabled>Select Country</option>

        <option v-for="subcategory in categories" v-bind:value='subcategory.b_subcategoryID' v-text="subcategory.name">{{subcategory.name}}</option>

      </select>  -->

                      <div class="buttons">
                        <b-button class="btn-success" @click="categorySubmit()"
                          >Submit</b-button
                        >
                         <b-button class="btn-dark" to="/category">
                            Back
                          </b-button>
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
                <!-- <template v-slot:cell(Action)="data">
                  <router-link
                    :to="{
                      name: 'EditLibrarian',
                      params: { UserID: data.item._id },
                    }"
                    tag="button"
                    class="btn btn-success edits"
                    >
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>
                </template> -->
                   <template v-slot:cell(Action)="data">
                  <router-link
                      tag="button"
                      :to="'/editcategory/' + data.item.categoryID"
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
import SideBar from "../components/SideBar.vue";
// import axios from "axios";

import { required } from "vuelidate/lib/validators";

export default {
  name: "CategoryPage",

  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      categoryName: "",
      b_subcategoryID: "",
      Action: "",
      // Status: "",
      fields: [
        { key: "categoryID", label: "Category ID", sortable: true },
        { key: "categoryName", label: "Category Name", sortable: true },
        { key: "b_subcategoryID", label: "Sub-category", sortable: true },

        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ items: "category" }),

    rows() {
      return this.items.length;
    },
  },

  async mounted() {
    return await this.$store.dispatch("fetchCategory");
  },

  validations: {
    categoryName: { required },
    b_subcategoryID: { },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async categorySubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookCatList);
        this.$store.dispatch("categorySubmit", {
          categoryName: this.categoryName,
          b_subcategoryID: this.b_subcategoryID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },

  components: { SideBar },
};
</script>
<style scope>
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
</style>
