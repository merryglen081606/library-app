<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-row class="rw">
        <HeaderCom title="Edit Category" />
      </b-row>
      <b-col xl="10" lg="9" sm="9">
        <!-- <div class="head">
          <h4>Library System/ <span>UpdateLibrarian</span></h4>
        </div> -->
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Category Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="updateCategory">
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
                            :class="{
                              'is-invalid': validationStatus(
                                $v.b_subcategoryID
                              ),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.b_subcategoryID.required"
                            class="invalid-feedback"
                          >
                            The Subcategory is required.
                          </div>
                        </b-form-group>

                        <div class="button">
                          <b-button
                            class="btn-success"
                            @click="updateCategory()"
                            >Submit</b-button
                          >
                          <!-- <router-link class="close-btn" to="/account">
                            Close
                          </router-link> -->
                          <b-button class="btn-dark" to="/category">
                            Back
                          </b-button>
                        </div>
                      </b-form>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import axios from "axios";
import api from "../../api";
import { mapGetters } from "vuex";
import HeaderCom from "../layout/HeaderCom.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "EditCategory",
  components: {
    SidebarComponent,
    HeaderCom,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      categoryName: "",
      b_subcategoryID: "",
      categoryID: "",
      Action: "",
    };
  },

  validations: {
    categoryName: { required },
    b_subcategoryID: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async updateCategory() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookCatList);
        this.$store.dispatch("updateCategory", {
          categoryName: this.categoryName,
          b_subcategoryID: this.b_subcategoryID,
          categoryID: this.categoryID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("category");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}book-cat/` + this.$route.params.categoryID
    );
    this.categoryName = res.data.response.categoryName;

    this.b_subcategoryID = res.data.response.b_subcategoryID;
    this.categoryID = res.data.response.categoryID;
  },

  computed: {
    ...mapGetters({ items: "category" }),
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style scoped>
nav {
  padding: 10px;
}
.rw{
  margin-left:17%;
  width: 84%;
}
div.py-2 {
  padding: 0 !important;
}
.head {
  margin-left: 390px;
  background-color: #11101d;
  border-radius: 10px;
  margin-top: 15px;
  padding-left: 50px;
}
.head h4 {
  font-family: montserrat;
  color: rgb(240, 240, 240);
  padding-top: 10px;
  padding: 15px;
}
.head h4 span {
  color: #eeb34b;
  font-family: montserrat;
}

.container-card {
  background-color: rgb(107, 129, 190);
  align-content: center;
  justify-content: center;
  margin-left: 200px;
  width: 590px;
  margin-top: 50px;
  color: #ffff;
}
.button {
  margin-top: 10px;
}
.button-container {
  margin-right: 50px;
}
.btn {
  margin-left: 5px;
}
.input_box {
  margin-bottom: 10px;
  margin-left: 20px;
}
.input {
  width: 520px;
}
.px-3 {
  text-align: center;
}
.form {
  align-content: center;
  justify-content: center;
}
.select {
  width: 520px;
}
.input_button {
  float: right;
}
@media (max-width: 1361px) {
  .container-card {
    margin-left: 80px;
    width: 420px;
  }
}
</style>
