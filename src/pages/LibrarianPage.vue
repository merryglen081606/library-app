<template>
 <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <b-row class="rw">
              <HeaderCom title="Librarian" />
        </b-row>
  
        <b-row class="container d-flex justify-content-center">
      
          <b-container class="tebs">
            
            <div class="tbales">
              <h1>Librarian Records</h1>

           <b-button variant="dark"  v-b-modal.modal-prevent-closing>Add Librarian</b-button>
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
                    <form ref="form" v-on:submit.stop.prevent="librarianSubmit">
                      <b-form-group
                        label="Firstname"
                        label-for="Firstname-input"
                      >
                        <b-form-input
                          id="Firstname-input"
                          v-model="$v.Firstname.$model"
                          :class="{
                            'is-invalid': validationStatus($v.Firstname),
                          }"
                        >
                        </b-form-input>
                        <div
                          v-if="!$v.Firstname.required"
                          class="invalid-feedback"
                        >
                          Please enter Firstname.(Required Failed)
                        </div>
                      </b-form-group>

                      <b-form-group
                        label="Middlename"
                        label-for="Middlename-input"
                      >
                        <b-form-input
                          id="Middlename-input"
                          v-model="Middlename"
                        >
                        </b-form-input>
                      </b-form-group>

                      <b-form-group label="Lastname" label-for="Lastname-input">
                        <b-form-input
                          id="Lastname-input"
                          v-model="$v.Lastname.$model"
                          :class="{
                            'is-invalid': validationStatus($v.Lastname),
                          }"
                        >
                        </b-form-input>
                        <div
                          v-if="!$v.Lastname.required"
                          class="invalid-feedback"
                        >
                          Please enter Lastname.(Required Failed)
                        </div>
                      </b-form-group>

                      <b-form-group
                        label="RegisterDate"
                        label-for="RegisterDate-date"
                        type="date"
                      >
                        <b-form-input
                          type="date"
                          id="RegisterDate-date"
                          v-model="$v.RegisterDate.$model"
                          :class="{
                            'is-invalid': validationStatus($v.RegisterDate),
                          }"
                        >
                        </b-form-input>
                        <div
                          v-if="!$v.RegisterDate.required"
                          class="invalid-feedback"
                        >
                          Please select Registrtation Date.(Required Failed)
                        </div>
                      </b-form-group>

                      <b-form-group label="Gender" label-for="Gender-value">
                        <b-form-select
                          class="form-control"
                          v-model="$v.Gender.$model"
                          :class="{
                            'is-invalid': validationStatus($v.Gender),
                          }"
                          id="Gender-select"
                        >
                          <b-form-select-option
                            >Please select an option</b-form-select-option
                          >
                          <b-form-select-option value="Female"
                            >Female</b-form-select-option
                          >
                          <b-form-select-option value="Male"
                            >Male</b-form-select-option
                          >
                        </b-form-select>
                        <div
                          v-if="!$v.Gender.required"
                          class="invalid-feedback"
                        >
                          Please Select Gender.(Required Failed)
                        </div>
                      </b-form-group>
                      <div class="buttons">
                        <b-button
                          class="mt-3 btn-success"
                          @click="librarianSubmit()"
                          >Submit</b-button
                        >
                        <!-- <b-button class="close" href="/librarians"
                          >Close</b-button
                        > -->
                        <b-button
                          class="mt-3"
                          variant="outline-danger"
                           href="/librarians"
                          block
                          @click="hideModal"
                          >Close</b-button
                        >
                      </div>
                    </form>
                  </b-modal>
                 <b-table
                responsive
              class="tb"
                hover
                id="my-table"
                :items="librarians"
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
                    :to="'/editlibrarian/' + data.item.UserID"
                    class="btn btn-success edits"
                  >
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>
                </template>
              </b-table>

              <b-pagination
                v-model="currentPage"
                style="float: right"
                pills
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>

              <p class="currentpage">Current Page: {{ currentPage }}</p>
            </div>
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderCom from "../layout/HeaderCom.vue";
// import axios from "axios";
import moment from "moment";
import { required } from "vuelidate/lib/validators";

export default {
  name: "LibrarianPage",

  data() {
    return {
      show: false,
      perPage: 10,
      currentPage: 1,
      filter: "",
      Firstname: "",
      Middlename: "",
      Lastname: "",
      RegisterDate: "",
      Gender: "",
      Action: "",
      button: "",

      // Status: "",
      fields: [
        { key: "UserID", label: "Librarian ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        {
          key: "RegisterDate",
          labe: "Register ate",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY");
          },
        },
        { key: "Gender", label: "Gender", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ librarians: "librarians" }),

    rows() {
      return this.librarians.length;
    },
  },

  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return await this.$store.dispatch("fetchLibrarian");
  },

  validations: {
    Firstname: { required },
    Lastname: { required },
    RegisterDate: { required },
    Gender: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async librarianSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.librarianList);
        this.$store.dispatch("librarianSubmit", {
          Firstname: this.Firstname,
          Middlename: this.Middlename,
          Lastname: this.Lastname,
          RegisterDate: this.RegisterDate,
          Gender: this.Gender,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
  },

  components: { SidebarComponent,HeaderCom },
};
</script>

<style scoped>
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
.tb {
 width: 1500px;
  display: flex;
  /* padding-bottom: 80px; */
}
.tebs {
  padding-right: 2%;
  padding-left: 2%;

  /* background-color: beige; */
  /* width: 1900px; */
}
.tbales {
  /* padding-right: 2%;
  padding-left: 2%; */

  /* padding-top: 1%; */
  padding-bottom: 1%;
  border-radius: 5px;
   width: 1500px;
   
}
/* .tbales {
  padding-right: 2%;
  padding-left: 2%;
  background-color: #f4f4ff;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 5px;
} */
.container {
  padding-top: 10px;
  margin-left: 11%;
  width: 100%;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
.selectbtn {
  margin-right: 5px;
}
.mt-3 {
  margin-right: 5px;
}
.rw{
  margin-left:16%;
  width: 100%;
}
/* .main-tab {
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
.mt-3 {
  margin-right: 5px;
} */
</style>
