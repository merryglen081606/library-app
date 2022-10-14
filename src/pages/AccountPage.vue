<template>
  <body>
    <b-container fluid id="lib">
      <b-col class="cl">
        <div class="navigation">
          <SidebarComponent />
        </div>
      </b-col>
      <b-row>
        <div fluid class="main-tab">
          <b-col>
            <div fluid class="header">
              <h4>Library System/<span> Librarian</span></h4>
            </div>
          </b-col>

          <b-col fluid class="cd">
            <div fluid class="contents">
              <b-card bg-variant="light" class="cards">
                <div class="title">Librarian Records</div>

                <!--Start  Modal Insert Data Code-->
                <template>
                  <div>
                    <b-button variant="dark" v-b-modal.modal-prevent-closing
                      >Add Account</b-button
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
                      <form ref="form" v-on:submit.stop.prevent="accountSubmit">
                        <b-form-group
                          label="Username"
                          label-for="Username-input"
                        >
                          <b-form-input
                            id="Username-input"
                            v-model="$v.Username.$model"
                            :class="{
                              'is-invalid': validationStatus($v.Username),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.Username.required"
                            class="invalid-feedback"
                          >
                            Please enter your Username.
                          </div>
                          <div
                            v-if="!$v.Username.minLength"
                            class="invalid-feedback"
                          >
                            Username must have atleast{{
                              $v.Username.$params.minLength.min
                            }}
                          </div>
                          <div
                            v-if="!$v.Username.maxLength"
                            class="invalid-feedback"
                          >
                            Username must not have greater then
                            {{ $v.Username.$params.maxLength.min }}
                          </div>
                        </b-form-group>

                        <b-form-group
                          label="Password"
                          label-for="Password-input"
                        >
                          <b-form-input
                            id="Password-input"
                            v-model="$v.Password.$model"
                            type="password"
                            :class="{
                              'is-invalid': validationStatus($v.Password),
                            }"
                            placeholder="Password"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.Password.required"
                            class="invalid-feedback"
                          >
                            Please enter Password
                          </div>
                          <div
                            v-if="!$v.Password.minLength"
                            class="invalid-feedback"
                          >
                            Password must have atleast{{
                              $v.Password.$params.minLength.min
                            }}
                          </div>
                          <div
                            v-if="!$v.Password.maxLength"
                            class="invalid-feedback"
                          >
                            Password must not have greater then
                            {{ $v.Password.$params.maxLength.min }}
                          </div>
                        </b-form-group>

                        <!-- <b-form-group label="Librarian" label-for="UserID-input">
                          <b-form-input
                            id="UserID-input"
                            v-model="$v.UserID.$model"
                            :class="{
                              'is-invalid': validationStatus($v.UserID),
                            }"
                          >
                          </b-form-input>
                          <div v-if="!$v.UserID.required" class="invalid-feedback">
                            The UserID is required.
                          </div>
                        </b-form-group> -->

                        <b-form-group label="User ID" label-for="UserID-input">
                          <b-form-input
                            id="UserID-input"
                            v-model="$v.UserID.$model"
                          >
                          </b-form-input>
                        </b-form-group>

                        <!-- <b-form-group label="Librarian:*" >
                                <b-form-select v-model="$v.UserID.$model" class="form-control"   :class="{
                              'is-invalid': validationStatus($v.UserID),
                            }">
                                  <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                  <b-form-select-option :id="UserID"></b-form-select-option>
                                  <b-form-select-option :id="UserID">{{id}}</b-form-select-option>
                                </b-form-select>
                                <div
                                  v-if="!$v.Roles.required"
                                  class="invalid-feedback"
                                >
                                  The Roles field is required.
                                </div>
                              </b-form-group> -->
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
                          <div
                            v-if="!$v.Roles.required"
                            class="invalid-feedback"
                          >
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
                          <div
                            v-if="!$v.Status.required"
                            class="invalid-feedback"
                          >
                            Please select Status
                          </div>
                        </b-form-group>
                        <div class="buttons">
                          <b-button class="btn-success" @click="accountSubmit()"
                            >Submit</b-button
                          >
                          <b-button class="close" href="/accounts"
                            >Close</b-button
                          >
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
                      :to="'/editaccount/' + data.item.AccountID"
                      class="btn btn-success edits"
                      >UPDATE
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

                <p class="currentpage">Current Page: {{ currentPage }}</p>
              </b-card>
            </div>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </body>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent.vue";
// import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "AccountPage",

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
      // Status: "",
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
    ...mapGetters({ items: "accounts" }),

    rows() {
      return this.items.length;
    },
  },

  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return await this.$store.dispatch("fetchAccounts");
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

  components: { SidebarComponent },
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
  width: 82%;
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
.currentpage {
  color: #11101d;
  font-size: 15px;
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
