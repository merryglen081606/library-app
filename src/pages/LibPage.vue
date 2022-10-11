<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Librarian</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Librarian Records</h1>

          <!--Start  Modal Insert Data Code-->
          <template>
            <div>
              <b-button v-b-modal.modal-prevent-closing>Add Book</b-button>
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
                  <b-form-group label="Firstname" label-for="Firstname-input">
                    <b-form-input
                      id="Firstname-input"
                      v-model="$v.Firstname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Firstname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.Firstname.required" class="invalid-feedback">
                      The firstname field is required.
                    </div>
                  </b-form-group>

                  <b-form-group label="Middlename" label-for="Middlename-input">
                    <b-form-input id="Middlename-input" v-model="Middlename">
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
                    <div v-if="!$v.Lastname.required" class="invalid-feedback">
                      The Lastname is required.
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
                      The Register Date is required.
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
                    <div v-if="!$v.Gender.required" class="invalid-feedback">
                      The Gender is required.
                    </div>
                  </b-form-group>
                  <div class="buttons">
                    <b-button class="btn-success" @click="librarianSubmit()"
                      >Submit</b-button
                    >
                    <b-button class="close" href="/librarians">Close</b-button>
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
            <template v-slot:cell(Action)>
              <!-- <router-link
                tag="button"
                :to="'/editlibrarian/' + data.item.UserID"
                class="btn btn-success edits"
                >UPDATE <b-icon class="edit-btn" icon="pencil-square"></b-icon>
              </router-link> -->
              <!-- <router-link :to="
            {
              name: 'EditLibrarian',
              params: {UserID: data.item._id}
            }"
            tag="button"
           
            class="btn btn-success edits" >Update
             <b-icon class="edit-btn" icon="pencil-square"></b-icon>
            </router-link> -->
         

                                            <!-- <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <b-btn class="mr-2" @click="editItem(data)">
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                    </b-btn>
                                                        <b-modal v-modal="editItem">

                                                        </b-modal>
                                                  
                                                </b-row>
                                            </span>
                                     -->
            <div>
              <b-button v-b-modal.modal-prevent-closing>Add Book</b-button>
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
                  <b-form-group label="Firstname" label-for="Firstname-input">
                    <b-form-input
                      id="Firstname-input"
                      v-model="$v.Firstname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Firstname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.Firstname.required" class="invalid-feedback">
                      The firstname field is required.
                    </div>
                  </b-form-group>

                  <b-form-group label="Middlename" label-for="Middlename-input">
                    <b-form-input id="Middlename-input" v-model="Middlename">
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
                    <div v-if="!$v.Lastname.required" class="invalid-feedback">
                      The Lastname is required.
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
                      The Register Date is required.
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
                    <div v-if="!$v.Gender.required" class="invalid-feedback">
                      The Gender is required.
                    </div>
                  </b-form-group>
                  <div class="buttons">
                    <b-button class="btn-success" @click="librarianSubmit()"
                      >Submit</b-button
                    >
                    <b-button class="close" href="/librarians">Close</b-button>
                  </div>
                </form>
              </b-modal>
            </div>
         
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
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent.vue";
// import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "LibrarianPage",

  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      Firstname: "",
      Middlename: "",
      Lastname: "",
      RegisterDate: "",
      Gender: "",
      Action: "",
      // Status: "",
      fields: [
        { key: "UserID", label: "User ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "RegisterDate", labe: "Register ate", sortable: true },
        { key: "Gender", label: "Gender", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ items: "librarians" }),

    rows() {
      return this.items.length;
    },
  },

  async mounted() {
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
  },

  components: { SidebarComponent },
};
</script>

<style scope>
.nav {
  float: left;
}
.main {
  float: right;
  width: 85%;
  margin-top: 20px;
}
.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 50px;
}
.main .head h4 {
  font-family: montserrat;
  color: rgb(240, 240, 240);
  padding-top: 10px;
  padding: 15px;
}
.main h4 span {
  color: #eeb34b;
  font-family: montserrat;
}
.button {
  padding: 50px;
}
.button .btn {
  width: auto;
}

.main h5 {
  text-align: center;
  padding-top: 20px;
}
h1 {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
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
.select {
  width: 463px;
  height: 40px;
  border-radius: 8px;
  border-color: light;
  margin-bottom: 10px;
}
.buttons {
  float: right;
}
.close {
  margin-left: 10px;
}
</style>
