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
                <h4 style="text-align: center">Create Reader Information</h4>
                <b-form v-on:submit.stop.prevent="readerSubmit">
                  <!-- <FormInput label="Invoice Number" /> -->

                  <b-form-group>
                    <b-col>
                      <b-row>
                        <b-button
                          v-b-modal.modal-1
                          style=" width:fit-content;height: fit-content;margin-top: 30px; "
                          >Librarian
                          </b-button>

                        <b-modal id="modal-1" title="Librarian List">
                          <b-container class="tebs">
                            <b-form-fieldset
                              style="float: right; padding-bottom: 2px"
                              class="col-4">
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
                        <b-form-group
                          label="Registered Librarian "
                          label-for="LibrarianID-input"
                        >
                          <b-form-input
                            id="LibrarianID-input"
                            v-model="$v.LibrarianID.$model"
                            :class="{
                              'is-invalid': validationStatus($v.LibrarianID),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.LibrarianID.required"
                            class="invalid-feedback"
                          >
                            Please enter Librarian. (Required Failed)
                          </div>
                        </b-form-group>
                        <!-- <FormInput
                          class="ins col-8"
                          label="Librarian ID"
                          v-model="LibrarianID"
                        /> -->
                        <!-- <b-button class="buttom" @click="showLibrarianModal=true"  style="width:fit-content; height:fit-content; margin-top:30px;">Librarian</b-button> -->
                      </b-row>
                    </b-col>
                  </b-form-group>

                  <b-form-group label="Reader No" label-for="ReaderNo-input">
                    <b-form-input
                      id="ReaderNo-input"
                      v-model="$v.ReaderNo.$model"
                      :class="{
                        'is-invalid': validationStatus($v.ReaderNo),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.ReaderNo.required" class="invalid-feedback">
                      Please enter Reader.(Required Failed)
                    </div>
                    <div v-if="!$v.ReaderNo.minLength" class="invalid-feedback">
                      Password must have atleast{{
                        $v.ReaderNo.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.ReaderNo.maxLength" class="invalid-feedback">
                      Reader No must not have greater then
                      {{ $v.ReaderNo.$params.maxLength.min }}
                    </div>
                  </b-form-group>

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
                      Please enter Firstname.(Required Failed)
                    </div>
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
                      Please enter Lastname.(Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Birthdate" label-for="Birthdate">
                    <b-form-input
                      id="Birthdate"
                      type="date"
                      v-model="$v.Birthdate.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Birthdate),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.Birthdate.required" class="invalid-feedback">
                      Please enter Birthdate.(Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Contact No" label-for="ContactNo-input">
                    <b-form-input
                      id="ContactNo-input"
                      v-model="$v.ContactNo.$model"
                      :class="{
                        'is-invalid': validationStatus($v.ContactNo),
                      }"
                      type="number"
                    >
                    </b-form-input>

                    <div v-if="!$v.ContactNo.required" class="invalid-feedback">
                      Please enter Contact No.(Required Failed)
                    </div>
                    <div
                      v-if="!$v.ContactNo.minLength"
                      class="invalid-feedback"
                    >
                      Contact No must have atleast{{
                        $v.ContactNo.$params.minLength.min
                      }}
                    </div>
                    <div
                      v-if="!$v.ContactNo.maxLength"
                      class="invalid-feedback"
                    >
                      Contact No must have atleast{{
                        $v.ContactNo.$params.maxLength.min
                      }}
                    </div>
                  </b-form-group>

                  <b-form-group label="Gender" label-for="Gender-value">
                    <b-form-select
                      v-model="$v.Gender.$model"
                      :class="{ 'is-invalid': validationStatus($v.Gender) }"
                      id="Gender-select"
                      class="form-control"
                    >
                      <b-form-select-option
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Female"
                        >Male</b-form-select-option
                      >
                      <b-form-select-option value="Male"
                        >Felame</b-form-select-option
                      >
                    </b-form-select>
                    <div v-if="!$v.Gender.required" class="invalid-feedback">
                      Please Select Gender.(Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Status" label-for="Status-value">
                    <b-form-select
                      v-model="$v.Status.$model"
                      :class="{ 'is-invalid': validationStatus($v.Status) }"
                      id="Status-select"
                      class="form-control"
                    >
                      <b-form-select-option
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Active"
                        >Acvtive</b-form-select-option
                      >
                      <b-form-select-option value="Not Active"
                        >Not Active</b-form-select-option
                      >
                    </b-form-select>
                    <div v-if="!$v.Status.required" class="invalid-feedback">
                      Please Select Status. (Required Failed)
                    </div>
                  </b-form-group>

                  <!-- <b-form-group label="City ID" label-for="CityID-input">
                        <b-form-input
                          id="CityID-input"
                          v-model="$v.CityID.$model"
                          :class="{ 'is-invalid': validationStatus($v.CityID) }"
                        >
                        </b-form-input>
                        <div
                          v-if="!$v.CityID.required"
                          class="invalid-feedback"
                        >
                          The City ID No name field is required.
                        </div>
                      </b-form-group> -->

                  <b-form-group label="Address" label-for="City-input">
                    <b-form-input
                      id="Address-input"
                      v-model="$v.City.$model"
                      :class="{
                        'is-invalid': validationStatus($v.City),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.City.required" class="invalid-feedback">
                      Please enter Address. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="RegisterDate" label-for="RegisterDate">
                    <b-form-input
                      id="RegisterDate"
                      type="date"
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
                      Please enter Date Register. (Failed Required)
                    </div>
                  </b-form-group>

                  <b-container
                    class="button-container d-flex justify-content-center"
                  >
                    <b-button
                      pill
                      class="pill"
                      variant="outline-dark"
                      @click="readerSubmit()"
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
                      :to="'/editreader/' + data.item.ReaderID"
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
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderCom from "../layout/HeaderCom.vue";
// import FormInput from "../components/FormInput.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ReaderPage",
  components: { SidebarComponent, HeaderCom },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      filter: "",
      ReaderNo: "",
      Firstname: "",
      Lastname: "",
      Birthdate: "",
      Gender: "",
      LibrarianID: "",
      RegisterDate: "",
      ContactNo: "",
      Status: "",
      City: "",
      Action: "",
      perPageL: 5,
      currentPageL: 1,
      filterS: "",
      UserID: "",

      // Status: "",
      librarian: [
        { key: "UserID", label: "Librarian ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],
      fields: [
        { key: "ReaderID", label: "Reader ID", sortable: true },
        { key: "ReaderNo", label: "Reader No", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        {
          key: "Birthdate",
          label: "Birthdate",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY");
          },
        },
        { key: "Gender", label: "Gender", sortable: true },
        { key: "LibrarianID", labe: "Register Librarian", sortable: true },
        {
          key: "RegisterDate",
          labe: "Register Date",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY");
          },
        },
        { key: "ContactNo", label: "ContactNo", sortable: true },
        { key: "Status", label: "Status", sortable: true },
        { key: "City", label: "Address", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ items: "readers", librarians: "librarians" }),

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
      this.$store.dispatch("fetchReaders")
    );
  },

  validations: {
    ReaderNo: { required, minLength: minLength(6), maxLength: maxLength(6) },
    Firstname: { required },
    Lastname: { required },
    Birthdate: { required },
    Gender: { required },
    LibrarianID: { required },
    RegisterDate: { required },
    ContactNo: { required, minLength: minLength(11), maxLength: maxLength(11) },
    City: { required },
    Status: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async readerSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.readerList);
        this.$store.dispatch("readerSubmit", {
          ReaderNo: this.ReaderNo,
          Firstname: this.Firstname,
          Lastname: this.Lastname,
          Birthdate: this.Birthdate,
          Gender: this.Gender,
          LibrarianID: this.LibrarianID,
          RegisterDate: this.RegisterDate,
          ContactNo: this.ContactNo,
          City: this.City,
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
  background-color: #d7d5e4;
  border-radius: 10px;

  outline-style: solid;
  outline-color: #b1acd3;
}

.tebs {
  background-color: #d7d5e4;
  padding: 15px 15px 15px 15px;
  border-radius: 10px;
  margin-top: 50px;

  outline-style: solid;
  outline-color: #b1acd3;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
</style>
