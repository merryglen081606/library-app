<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <HeaderCom title="Account" />

        <b-col class="">
          <b-container d-flex class="AddAccount">
            <b-row class="rows">
              <b-col d-flex class="from">
                <h4 style="text-align: center">Create Account Information</h4>
                <b-form v-on:submit.stop.prevent="accountSubmit()">
                  <!-- <FormInput label="Invoice Number" /> -->

                  <b-form-group label="UserID" label-for="UserID-input">
                    <b-col>
                      <b-row>
                        <b-form-input
                          style="
                            width: 240px;
                            height: 42px;
                            margin-top: 30px;
                            margin-left: 10px;
                            margin-right: 10px;
                          "
                          id="UserID-input"
                          v-model="$v.UserID.$model"
                          :class="{
                            'is-invalid': validationStatus($v.Roles),
                          }"
                        >
                        </b-form-input>

                        <!-- <b-button class="buttom" @click="showLibrarianModal=true"  style="width:fit-content; height:fit-content; margin-top:30px;">Librarian</b-button> -->

                        <b-button
                          v-b-modal.modal-1
                          style="
                            width: fit-content;
                            height: fit-content;
                            margin-top: 30px;
                          "
                          >Librarian</b-button
                        >
                        <div
                          v-if="!$v.Username.required"
                          class="invalid-feedback"
                        >
                          Please enter your Username.
                        </div>
                        <b-modal id="modal-1" title="Librarian List">
                          <b-container class="tebs">
                            <b-form-fieldset
                              style="float: right; padding-bottom: 2px"
                              class="col-4"
                            >
                              <b-input
                                v-model="filterS"
                                placeholder="Type here to Search..."
                              ></b-input>
                            </b-form-fieldset>
                            <br /><br />
                            <b-table
                              responsive
                              striped
                              bordered
                              hover
                              id="my-table"
                              :items="librarians"
                              :filter="filterS"
                              :fields="librarian"
                              primary-key
                              label-sort-asc=""
                              label-sort-desc=""
                              label-sort-clear=""
                              :per-page="perPageL"
                              :current-page="currentPageL"
                            ></b-table>
                            <b-pagination
                              v-model="currentPageL"
                              pills
                              :total-rows="rows"
                              :per-page="perPageL"
                              aria-controls="my-table"
                            ></b-pagination>

                            <p class="currentpage">
                              Current Page: {{ currentPageL }}
                            </p>
                          </b-container>
                        </b-modal>
                      </b-row>
                    </b-col>
                  </b-form-group>

                  <b-form-group label="Roles:*">
                    <b-form-select
                      v-model="$v.Roles.$model"
                      class="form-control"
                      :class="{
                        'is-invalid': validationStatus($v.Roles),
                      }"
                    >
                      <b-form-select-option :value="null"
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Admin"
                        >Admin</b-form-select-option
                      >
                      <b-form-select-option value="User"
                        >User</b-form-select-option
                      >
                    </b-form-select>
                    <div v-if="!$v.Roles.required" class="invalid-feedback">
                      Please select your Role.
                    </div>
                  </b-form-group>

                  <b-form-group label="Status:*">
                    <b-form-select
                      class="form-control"
                      v-model="$v.Status.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Status),
                      }"
                      id="Status-select"
                    >
                      <b-form-select-option
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Working"
                        >Working</b-form-select-option
                      >
                      <b-form-select-option value="Not Working"
                        >Not Working</b-form-select-option
                      >
                    </b-form-select>
                    <div v-if="!$v.Status.required" class="invalid-feedback">
                      Please select Status
                    </div>
                  </b-form-group>

                  <b-form-group label="Username" label-for="Username-input">
                    <b-form-input
                      placeholder="Enter Username"
                      icon="tools"
                      id="Username-input"
                      v-model="$v.Username.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Username),
                      }"
                    >
                    </b-form-input>

                    <div v-if="!$v.Username.required" class="invalid-feedback">
                      Please enter your Username.
                    </div>
                    <div v-if="!$v.Username.minLength" class="invalid-feedback">
                      Username must have atleast{{
                        $v.Username.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.Username.maxLength" class="invalid-feedback">
                      Username must not have greater then
                      {{ $v.Username.$params.maxLength.min }}
                    </div>
                  </b-form-group>

                  <b-form-group label="Password" label-for="Password-input">
                    <b-form-input
                      id="Password-input"
                      v-model="$v.Password.$model"
                      type="password"
                      :class="{
                        'is-invalid': validationStatus($v.Password),
                      }"
                      placeholder="Enter Password"
                    >
                    </b-form-input>
                    <div v-if="!$v.Password.required" class="invalid-feedback">
                      Please enter Password
                    </div>
                    <div v-if="!$v.Password.minLength" class="invalid-feedback">
                      Password must have atleast{{
                        $v.Password.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.Password.maxLength" class="invalid-feedback">
                      Password must not have greater then
                      {{ $v.Password.$params.maxLength.min }}
                    </div>
                  </b-form-group>

                  <b-container
                    class="button-container d-flex justify-content-center"
                  >
                    <b-button
                      pill
                      class="pill"
                      variant="outline-dark"
                      @click="accountSubmit()"
                      >Submit Data</b-button
                    >
                  </b-container>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-row>
          <b-container class="tebs">
            <h1>Account Records</h1>
            <b-form-fieldset
              style="float: right; padding-bottom: 2px"
              class="col-4"
            >
              <b-input
                v-model="filter"
                placeholder="Type here to Search..."
              ></b-input>
            </b-form-fieldset>
            <br /><br />
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
                      :to="'/editaccounts/' + data.item.AccountID"
                      class="btn btn-success edits"
                      >
                      <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                    </router-link>
                    </template>
              <!-- <template v-b-modal @click="showEditModal(account)">
                <div class="d-flex justify-content-center">
                          <div>
                            <b-button  class="btn btn-success edits" v-b-modal @click="showUpdateModal(item)">
                              <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                            </b-button>
                          </div>
                          </div> -->
              <!-- <router-link
                  tag="button"
                  :to="'/editlibrarian/' + data.item.UserID"
                  class="btn btn-success edits"
                  >UPDATE
                  <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                </router-link> -->
              <!-- <router-link :to="
                  {
                    name: 'EditLibrarian',
                    params: {UserID: data.item._id}
                  }"
                  tag="button"
                
                  class="btn btn-success edits" >Update
                  <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>  -->
              <!-- </template> -->
            </b-table>
            <!--End  DataTable Code-->

            <b-pagination
              v-model="currentPage"
              style="float: right;"
              pills
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>

            <p class="currentpage">Current Page: {{ currentPage }}</p>
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderCom from "../layout/HeaderCom.vue";


import { required, minLength, maxLength } from "vuelidate/lib/validators";

import { mapGetters } from "vuex";
export default {
  name: "PageAccount",
  components: { SidebarComponent, HeaderCom },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      filter: "",
      Username: "",
      Password: "",
      Librarian: "",
      Roles: "",
      Status: "",
      Action: "",
      perPageL: 5,
      currentPageL: 1,
      filterS: "",
      Firstname: "",
      Lastname: "",
      UserID: "",

      // Status: "",
      librarian: [
        { key: "UserID", label: "Librarian ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],
      fields: [
        { key: "Username", label: "Username", sortable: true },
        { key: "UserID", label: "Librarian", sortable: true },
        { key: "Roles", label: "Roles", sortable: true },
        { key: "Status", labe: "Status", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ items: "accounts", librarians: "librarians" }),

    rows() {
      return this.librarians.length, this.items.length;
    },
  },

  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return (
      await this.$store.dispatch("fetchLibrarian"),
      this.$store.dispatch("fetchAccounts")
    );
  },

  validations: {
    Username: { required, minLength: minLength(6), maxLength: maxLength(18) },
    Password: { required, minLength: minLength(8), maxLength: maxLength(18) },
    UserID: { required },
    Roles: { required },
    Status: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async accountSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.accountList);
        this.$store.dispatch("accountSubmit", {
          Username: this.Username,
          Password: this.Password,
          UserID: this.UserID,
          Roles: this.Roles,
          Status: this.Status,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
};
</script>
<style scoped>
.AddAccount {
  float: left;
  margin-left: 190px;
  width: 30%;
}

.from {
  margin-left: 30%;
  display: grid;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  margin-right: 30px;
  margin-top: 50px;
  background-color: #f4f4ff;
  border-radius: 5px;

  outline-style: solid;
  outline-color: #6d6d6f;
}

.tebs {
  background-color: #f4f4ff;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;
  margin-top: 50px;
  width: 1050px;
  /* outline-style: solid;
  outline-color: #6d6d6f; */
  margin-right: 60px;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
</style>
