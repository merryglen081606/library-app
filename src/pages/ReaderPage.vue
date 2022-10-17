<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-row class="rw">
        <HeaderCom title="Reader" />
      </b-row>
      <b-col>
        <b-row class="container d-flex justify-content-center">
          <b-container class="tebs">
            <div class="tbales">
              <!-- <h1>Reader Records</h1> -->

              <b-button variant="dark" v-b-modal.modal-prevent-closing
                >Add Reader</b-button
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
                  id="my-table"
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
              </b-modal>

              <!--End-->
              <b-modal
                hide-footer
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Librarian"
              >
                <b-form ref="form" v-on:submit.stop.prevent="readerSubmit">
                  <!-- <FormInput label="Invoice Number" /> -->
                  <b-form-input
                    id="LibrarianID-input"
                    v-model="$v.LibrarianID.$model"
                    :class="{
                      'is-invalid': validationStatus($v.LibrarianID),
                    }"
                  >
                  </b-form-input>
                  <b-form-group
                    label="Registered Librarian "
                    label-for="LibrarianID-input"
                  >
                    <div
                      v-if="!$v.LibrarianID.required"
                      class="invalid-feedback"
                    >
                      Please enter Librarian. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <b-form-select
                      class="selected col-lg-12"
                      value-field="UserID"
                      text-field="Firstname"
                      :options="librarians"
                      v-model="$v.LibrarianID.$model"
                    ></b-form-select>
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
                      Reader No must have atleast 4 digit{{
                        $v.ReaderNo.$params.minLength.min
                      }}
                    </div>
                    <div v-if="!$v.ReaderNo.maxLength" class="invalid-feedback">
                      Reader No must not have greater then 4 digit
                      {{ $v.ReaderNo.$params.maxLength.min }}
                    </div>
                  </b-form-group>

                  <b-form-group label="Firstname" label-for="Firstname-input">
                    <b-form-input
                      style="text-transform: capitalize"
                      id="Firstname1-input"
                      v-model="$v.Firstname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Firstname1),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.Firstname.required" class="invalid-feedback">
                      Please enter Firstname.(Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Lastname" label-for="Lastname-input">
                    <b-form-input
                      style="text-transform: capitalize"
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

                  <b-form-group label="Address" label-for="City-input">
                    <b-form-input
                      style="text-transform: capitalize"
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

                  <div class="buttons">
                    <b-button class="mt-3 btn-success" @click="readerSubmit()"
                      >Submit</b-button
                    >
                    <b-button class="mt-3 btn-warning" type="reset"
                      >Reset</b-button
                    >
                    <!-- <b-button class="close" to="/account"
                          >Close</b-button
                        > -->
                    <b-button
                      href="/readers"
                      class="mt-3"
                      variant="outline-danger"
                      block
                      @click="hideModal"
                      >Close</b-button
                    >
                  </div>
                </b-form>
              </b-modal>

              <b-table
                class="tb"
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
                    :to="'/editreader/' + data.item.ReaderID"
                    class="btn btn-secondary edits"
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
      perPage: 10,
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
        { key: "ReaderID", label: "ID", sortable: true },
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
    ReaderNo: { required, minLength: minLength(4), maxLength: maxLength(4) },
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
      //  console.log("readerList", this.readerList);
      //   this.clear();
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
  },
};
</script>
<style scoped>
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}

/* .tbales {
  padding-right: 2%;
  padding-left: 2%;
  background-color: #f4f4ff;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 5px;
} */
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

/* .container {
  padding-top: 1%;
  margin-left: 12%;
  width: 100%;
} */
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
.selected {
  border-radius: 5px;
  height: 40px;
  /* background-color: rgb(47, 255, 0); */
}
</style>
