<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <b-row class="rw">
          <HeaderCom title="Account" />
        </b-row>

        <b-row class="container fluid justify-content-center">
          <b-container class="tebs">
            <div class="tbales">
              <!-- <h1 class="text">Account Records</h1> -->

              <b-button variant="dark" v-b-modal.modal-prevent-closing
                >Add Account</b-button
              >
              <b-button
                style="margin-left: 3px"
                v-b-modal.modal-1
                variant="secondary"
                >View Librarian</b-button
              >
              <b-form-fieldset style="float: right" class="col-4">
                <b-input
                  v-model="filter"
                  placeholder="Type here to Search..."
                ></b-input>
              </b-form-fieldset>

              <b-modal
                scrollable
                id="modal-1"
                hide-footer
                class="d-flex justify-content-center"
                size="lg"
                title="Librarian List"
              >
                <b-form-fieldset
                  style="float: right; padding-bottom: 1px"
                  class="col-12"
                >
                  <b-input
                    v-model="filterS"
                    placeholder="Type here to Search..."
                  ></b-input>
                </b-form-fieldset>
                <br /><br />
                <b-table
                  class="my-3"
                  v-for="i in 1"
                  :key="i"
                  responsive
                  striped
                  bordered
                  hover
                  id="my-table1"
                  :items="librarians"
                  :filter="filterS"
                  :fields="librarian"
                  primary-key
                  label-sort-asc=""
                  label-sort-desc=""
                  label-sort-clear=""
                  :per-page="per"
                  :current-page="Page"
                ></b-table>
                <!-- <b-pagination
                  v-model="Page"
                  pills
                  :total-rows="rows"
                  :per-page="per"
                  aria-controls="my-table1"
                ></b-pagination>

                <p class="currentpage">Current Page: {{ Page }}</p> -->
              </b-modal>
              <b-modal
                hide-footer
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Account"
              >
                <form ref="form" v-on:submit.stop.prevent="accountSubmit()">
                  <!-- <FormInput label="Invoice Number" /> -->

                  <b-form-group label="Librarian" label-for="UserID-input">
                    <b-form-input
                      placeholder="Enter Librarian ID"
                      icon="tools"
                      id="UserID-input"
                      v-model="$v.UserID.$model"
                      :class="{
                        'is-invalid': validationStatus($v.UserID),
                      }"
                    >
                    </b-form-input>

                    <div v-if="!$v.Username.required" class="invalid-feedback">
                      Please enter your Username.
                    </div>
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
                      <b-form-select-option value="Librarian"
                        >Librarian</b-form-select-option
                      >
                      <!-- <b-form-select-option value="User"
                        >User</b-form-select-option
                      > -->
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
                      Password must have atleast 6 digit{{
                        $v.Password.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.Password.maxLength" class="invalid-feedback">
                      Password must not have greater then 15 digit
                      {{ $v.Password.$params.maxLength.min }}
                    </div>
                  </b-form-group>
                  <div class="buttons">
                    <b-button class="mt-3 btn-success" @click="accountSubmit()"
                      >Submit</b-button
                    >
                    <!-- <b-button class="close" to="/account"
                          >Close</b-button
                        > -->
                    <b-button class="mt-3 btn-warning" type="reset"
                      >Reset</b-button
                    >
                    <b-button
                      class="mt-3"
                      href="/account"
                      variant="outline-danger"
                      block
                      @click="hideModal"
                      >Close</b-button
                    >
                  </div>
                </form>
              </b-modal>

              <b-table
                responsive
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
                    class="btn btn-secondary edits"
                  >
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link>
                </template>
                <!-- <template v-slot:cell(Action)={item}>
                  <b-button v-b-modal @click="savelocal(item)">
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </b-button> -->
                <!-- <router-link
                    tag="button"
                    :to="savelocal(data)"
                    class="btn btn-success edits"
                  >
                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                  </router-link> -->
                <!-- </template> -->
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

              <!--updatwe--->
              <b-modal
                hide-footer
                id="modal-form"
                size="m"
                ref="modal"
                title="Update Account"
              >
                <form ref="form" submit="updateAccount">
                  <!-- <FormInput label="Invoice Number" /> -->

                  <div>
                    <div class="modal-form__form-group mb-3">
                      <b-form-group label="Username" class="ml-2">
                      </b-form-group>
                      <b-form-input
                        id="firstname"
                        placeholder="Enter First Name"
                        type="text"
                        v-model="item.Username"
                        autocomplete="off"
                        required
                      >
                      </b-form-input>
                    </div>
                    <div class="modal-form__form-group mb-3">
                      <b-form-group label="Password" class="ml-2">
                      </b-form-group>
                      <b-form-input
                        id="lastname"
                        placeholder="Enter Last Name"
                        type="text"
                        v-model="item.Password"
                        required
                      >
                      </b-form-input>
                    </div>
                    <div class="form-group mb-3">
                      <b-form-group label="Phone Number" class="ml-2">
                      </b-form-group>
                      <b-form-input
                        id="contact"
                        placeholder="Enter Phone Number"
                        type="number"
                        v-model="item.UserID"
                        required
                      >
                      </b-form-input>
                    </div>
                    <div class="form-group mb-3">
                      <b-form-group label="Address" class="ml-2">
                      </b-form-group>
                      <b-form-input
                        id="address"
                        placeholder="Enter Address"
                        type="text"
                        v-model="item.Roles"
                        required
                      >
                      </b-form-input>
                    </div>
                    <div class="form-group mb-3">
                      <b-form-group label="Address" class="ml-2">
                      </b-form-group>
                      <b-form-input
                        id="address"
                        placeholder="Enter Address"
                        type="text"
                        v-model="item.Status"
                        required
                      >
                      </b-form-input>
                    </div>
                  </div>
                  <div class="buttons">
                    <b-button class="mt-3 btn-success" @click="updateAccount()"
                      >Submit</b-button
                    >

                    <!-- <b-button class="close" to="/account"
                          >Close</b-button
                        > -->
                    <b-button
                      class="mt-3"
                      href="/account"
                      variant="outline-danger"
                      block
                      @click="hideModal"
                      >Close</b-button
                    >
                  </div>
                </form>
              </b-modal>
            </div>
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
      perPage: 10,
      currentPage: 1,
      filter: "",
      Username: "",
      Password: "",
      Librarian: "",
      Roles: "",
      Status: "",
      Action: "",
      per: "",
      Page: 1,
      filterS: "",
      Firstname: "",
      Lastname: "",
      // UserID: localStorage.AccountID,
      UserID: "",
      item: {
        Username: null,
        Password: null,
        UserID: null,
        Roles: null,
        Status: null,
      },
      // Status: "",
      librarian: [
        { key: "UserID", label: "Librarian ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],

      fields: [
        { key: "AccountID", label: "Account ID", sortable: true },
        { key: "Username", label: "Username", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
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
    savelocal(item) {
      this.item = {
        Username: item.Username,
        Password: item.Password,
        UserID: item.UserID,
        Roles: item.Roles,
        Status: item.Status,
      };
      this.$bvModal.show("modal-form");
      localStorage.setItem("accountid", item.item.AccountID);
    },
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
    async updateAccount() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.accountList);
        this.$store.dispatch("updateAccount", this.item);
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
  },
};
</script>
<style scoped>
.rw {
  margin-left: 17%;
  width: 83%;
}
/* .tebs {
  padding-right: 2%;
  padding-left: 2%;
}
.tbales {
  padding-bottom: 1%;
  border-radius: 5px;
  width: 100%;
} */
.container {
  padding-top: 10px;
  margin-left: 11%;
  width: 90%;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
.mt-3 {
  margin-right: 5px;
}
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
.text {
  font-size: 15px;
}
</style>
