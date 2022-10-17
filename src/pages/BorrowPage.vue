<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <b-row class="rw">
          <HeaderCom title="Transaction" />
        </b-row>

        <b-col class="">
          <b-container d-flex class="AddAccount">
            <b-row class="rows">
              <b-col d-flex class="from">
                <h4 style="text-align: center">Create Book</h4>
                <b-row
                  lass="select-button"
                  style="
                    align-items: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <b-button
                    style="
                      margin-left: 3px;
                      width: fit-content;
                      height: fit-content;
                      margin-top: 10px;
                      margin-right: 3px;
                      margin-left: 3px;
                      width: 100px;
                    "
                    v-b-modal.modal-1
                    variant="secondary"
                    >Librarian</b-button
                  >

                  <b-modal
                    scrollable
                    id="modal-1"
                    hide-footer
                    class="d-flex justify-content-center"
                    size="lg"
                    title="View Librarian List"
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

                  <b-button
                    scrollable
                    hide-footer
                    class="d-flex justify-content-center"
                    v-b-modal.modal-2
                    style="
                      width: fit-content;
                      height: fit-content;
                      margin-top: 10px;
                      margin-right: 3px;
                      margin-left: 3px;
                      width: 100px;
                    "
                    >Reader</b-button
                  >

                  <b-modal
                    scrollable
                    id="modal-2"
                    hide-footer
                    class="d-flex justify-content-center"
                    size="lg"
                    title="View Reader List"
                  >
                    <b-form-fieldset
                      style="float: right; padding-bottom: 1px"
                      class="col-12"
                    >
                      <b-input
                        v-model="filterR"
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
                      :items="readers"
                      :filter="filterR"
                      :fields="reader"
                      primary-key
                      label-sort-asc=""
                      label-sort-desc=""
                      label-sort-clear=""
                      :per-page="per"
                      :current-page="Page"
                    ></b-table>
                  </b-modal>

                  <b-button
                    v-b-modal.modal-3
                    style="
                      width: fit-content;
                      height: fit-content;
                      margin-top: 10px;
                      margin-right: 3px;
                      width: 110px;
                    "
                    >Book Copy</b-button
                  >

                  <b-modal
                    scrollable
                    id="modal-3"
                    hide-footer
                    class="d-flex justify-content-center"
                    size="lg"
                    title="View Book Copies"
                  >
                    <b-form-fieldset
                      style="float: right; padding-bottom: 1px"
                      class="col-12"
                    >
                      <b-input
                        v-model="filterB"
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
                      :items="bookcopy"
                      :filter="filterB"
                      :fields="bookcopies"
                      primary-key
                      label-sort-asc=""
                      label-sort-desc=""
                      label-sort-clear=""
                      :per-page="per"
                      :current-page="Page"
                    ></b-table>
                  </b-modal>
                </b-row>

                <b-form v-on:submit.stop.prevent="transactionSubmit">
                  <!-- <FormInput label="Invoice Number" /> -->
                  <b-form-group label="Reader" label-for="ReaderID-input">
                    <b-form-input
                      id="ReaderID-input"
                      v-model="$v.ReaderID.$model"
                      :class="{
                        'is-invalid': validationStatus($v.ReaderID),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.ReaderID.required" class="invalid-feedback">
                      Please enter Reader.(Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Book" label-for="CopyID-input">
                    <b-form-input
                      id="CopyID-input"
                      v-model="$v.CopyID.$model"
                      :class="{
                        'is-invalid': validationStatus($v.CopyID),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.CopyID.required" class="invalid-feedback">
                      Please select Book.(Required Failed)
                    </div>
                  </b-form-group>

                  <!-- <b-form-group label="Librarian" label-for="LibrarianID-input">
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
                      Please enter Librarian.(Required Failed)
                    </div>
                  </b-form-group> -->
                  <b-form-group
                    label="Librarian "
                    label-for="LibrarianID-input"
                  >
                    <b-form-select
                      class="selected"
                      value-field="UserID"
                      text-field="Firstname"
                      :options="librarians"
                      v-model="$v.LibrarianID.$model"
                    ></b-form-select>
                    <b-form-select
                      class="selected"
                      value-field="UserID"
                      text-field="Lastname"
                      :options="librarians"
                      v-model="$v.LibrarianID.$model"
                    ></b-form-select>
                    <b-form-select-hide
                      class="selct"
                      value-field="UserID"
                      text-field="UserID"
                      :options="librarians"
                      v-model="$v.LibrarianID.$model"
                    ></b-form-select-hide>
                  </b-form-group>
                  <b-form-group>
                    <div
                      v-if="!$v.LibrarianID.required"
                      class="invalid-feedback"
                    >
                      Please enter Librarian. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Date Issued" label-for="Birthdate">
                    <b-form-input
                      id="DateIssued"
                      type="date"
                      v-model="$v.DateIssued.$model"
                      :class="{
                        'is-invalid': validationStatus($v.DateIssued),
                      }"
                    >
                    </b-form-input>
                    <div
                      v-if="!$v.DateIssued.required"
                      class="invalid-feedback"
                    >
                      The Date Issued field is required.
                    </div>
                  </b-form-group>
                  <b-form-group label="Due Date" label-for="DueDate">
                    <b-form-input
                      id="DueDate"
                      type="date"
                      v-model="$v.DueDate.$model"
                      :class="{
                        'is-invalid': validationStatus($v.DueDate),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.DueDate.required" class="invalid-feedback">
                      The Due Date field is required.
                    </div>
                  </b-form-group>
                  <b-form-group label="Date Return" label-for="DateReturned">
                    <b-form-input
                      id="DateReturned"
                      type="date"
                      v-model="$v.DateReturned.$model"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Penalty" label-for="Penalty">
                    <b-form-input
                      id="Penalty"
                      type="number"
                      v-model="$v.Penalty.$model"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Status" label-for="Status-value">
                    <b-form-select
                      v-model="$v.Status.$model"
                      id="Status-select"
                      class="form-control"
                    >
                      <b-form-select-option
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Returned on time"
                        >Returned on time</b-form-select-option
                      >
                      <b-form-select-option value="Returned due date"
                        >Returned due date</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group label="Remarks" label-for="remarks">
                    <b-form-input
                      style="text-transform: capitalize"
                      id="remarks"
                      type="text"
                      v-model="$v.remarks.$model"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-container
                    class="button-container d-flex justify-content-center"
                  >
                    <b-button
                      pill
                      class="pill"
                      variant="outline-dark"
                      @click="transactionSubmit()"
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
            <!-- <h1>Transaction Records</h1> -->
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
                  :to="'/edittransaction/' + data.item.BorrowerID"
                  class="btn btn-secondary edits"
                >
                  <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                </router-link>
              </template>
            </b-table>
            <!--End  DataTable Code-->

            <b-pagination
              v-model="currentPage"
              style="float: right"
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

import { required } from "vuelidate/lib/validators";
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "BookPage",
  components: { SidebarComponent, HeaderCom },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      ReaderFirstname: "",
      ReaderLastname: "",
      LibrarianID: null,
      CopyID: null,
      DateIssued: null,
      DueDate: null,
      DateReturned: null,
      Penalty: null,
      Status: null,
      remarks: null,
      //author
      //library
      perPageL: 10,
      currentPageL: 1,
      filterS: "",
      filterR: "",
      filterB: "",
      Firstname: "",
      Lastname: "",
      //bookcopySubmit copyID: null,
      copyNo: null,
      b_bookID: null,
      b_shelfID: null,

      // Status: "",
      fields: [
        { key: "BorrowerID", label: "ID", sortable: true },
        { key: "ReaderFirstname", label: "Firstname", sortable: true },
        { key: "ReaderLastname", label: "Lastname", sortable: true },
        { key: "LibrarianID", label: "Librarian", sortable: true },
        { key: "CopyID", label: "Copy ID", sortable: true },
        {
          key: "DateIssued",
          label: "Date Issued",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY");
          },
        },
        {
          key: "DueDate",
          label: "Due Date",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY");
          },
        },
        {
          key: "DateReturned",
          label: "Date Return",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("MMM DD, YYYY");
          },
        },
        { key: "Penalty", label: "Penalty", sortable: true },
        { key: "Status", label: "Status", sortable: true },
        { key: "remarks", label: "Remarks", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
      librarian: [
        { key: "UserID", label: "Librarian ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],
      reader: [
        { key: "ReaderID", label: "Reader", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
      ],
      bookcopies: [
        { key: "copyID", label: "Copy ID", sortable: true },
        { key: "copyNo", label: "Copy No", sortable: true },
        { key: "b_bookID", label: "Book ID", sortable: true },
        { key: "b_shelfID", label: "Shelf ID", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({
      items: "transactions",
      librarians: "librarians",
      readers: "readers",
      bookcopy: "bookcopy",
    }),

    rows() {
      return (
        this.readers.length,
        this.librarians.length,
        this.bookcopy.length,
        this.items.length
      );
    },
  },

  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return (
      await this.$store.dispatch("fetchTransaction"),
      this.$store.dispatch("fetchLibrarian"),
      this.$store.dispatch("fetchReaders"),
      this.$store.dispatch("fetchBookcopy")
    );
  },

  validations: {
    ReaderID: { required },
    CopyID: { required },
    DateIssued: { required },
    DueDate: { required },
    DateReturned: {},
    Penalty: {},
    Status: {},
    LibrarianID: { required },
    remarks: {},
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async transactionSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.borrowerList);
        this.$store.dispatch("transactionSubmit", {
          ReaderID: this.ReaderID,
          LibrarianID: this.LibrarianID,
          CopyID: this.CopyID,
          DateIssued: this.DateIssued,
          DueDate: this.DueDate,
          DateReturned: this.DateReturned,
          Penalty: this.Penalty,
          Status: this.Status,
          remarks: this.remarks,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
    // async created(){
    //   const res =await axios.get('books',{
    //     headers:{
    //       Authorization: 'Bearer ' + localStorage.getItem('token' , res.data.token)
    //     }
    //   });
    // }
  },
};
</script>
<style scoped>
.AddAccount {
  float: left;
  margin-left: 230px;
  width: 24%;
}
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}

.from {
  margin-left: 20%;
  display: grid;
  background-color: #f4f4ff;
  border-radius: 5px;
  outline-style: solid;
  outline-color: #6d6d6f;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  margin-right: 30px;
  margin-top: 50px;
}
.rw{
  margin-left:15%;
  width: 80%;
}
.tebs {
  background-color: #f4f4ff;
  padding-top: 5px;
  border-radius: 5px;
  margin-top: 50px;
  width: 1150px;

  margin-right: 60px;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
.selected {
  border-radius: 5px;
  height: 38px;
  margin-right: 3px;
  width: 148px;
  /* backg1ound-color: rgb(47, 255, 0); */
}
</style>
