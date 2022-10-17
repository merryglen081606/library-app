<template>
  <b-container fluid id="hero">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-row class="rw">
          <HeaderCom title="Edit Transaction" />
        </b-row>
      <b-col xl="10" lg="9" sm="9">
    
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3"> Transaction Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="updateBorrower">
                        <b-form-group label="Reader" label-for="ReaderID-input">
                          <b-form-input
                            id="ReaderID-input"
                            v-model="$v.ReaderID.$model"
                            :class="{
                              'is-invalid': validationStatus($v.ReaderID),
                            }"
                          >
                          </b-form-input>
                          <div
                            v-if="!$v.ReaderID.required"
                            class="invalid-feedback"
                          >
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
                          <div
                            v-if="!$v.CopyID.required"
                            class="invalid-feedback"
                          >
                            Please select Book.(Required Failed)
                          </div>
                        </b-form-group>

                        <b-form-group
                          label="Librarian"
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
                            Please enter Librarian.(Required Failed)
                          </div>
                        </b-form-group>

                        <b-form-group
                          label="Date Issued"
                          label-for="DateIssued"
                        >
                          <b-form-input
                            id="DateIssued"
                            type="input"
                            v-model="$v.DateIssued.$model"
                          >
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Due Date" label-for="DueDate">
                          <b-form-input
                            id="DueDate"
                            type="input"
                            v-model="$v.DueDate.$model"
                          >
                          </b-form-input>
                        </b-form-group>

                        <b-form-group
                          label="Date Return"
                          label-for="DateReturned"
                        >
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
                            id="remarks"
                            type="text"
                            v-model="$v.remarks.$model"
                          >
                          </b-form-input>
                        </b-form-group>

                        <div class="buttons">
                          <b-button
                            class="btn-success"
                            @click="updateBorrower()"
                            >Submit</b-button
                          >
                          <b-button class="btn-dark" to="/borrow">
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
import HeaderCom from "../layout/HeaderCom.vue";
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "EditBorrower",
  components: {
    SidebarComponent,HeaderCom
  },
  data() {
    return {
      ReaderID: "",
      LibrarianID: "",
      CopyID: "",
      DateIssued: "",
      DueDate: "",
      DateReturned: "",
      Penalty: "",
      Status: "",
      remarks: "",
      BorrowerID: "",
    };
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
    async updateBorrower() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.borrowerList);
        this.$store.dispatch("updateBorrower", {
          ReaderID: this.ReaderID,
          LibrarianID: this.LibrarianID,
          CopyID: this.CopyID,
          DateIssued: this.DateIssued,
          DueDate: this.DueDate,
          DateReturned: this.DateReturned,
          Penalty: this.Penalty,
          Status: this.Status,
          remarks: this.remarks,
          BorrowerID: this.BorrowerID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid Data");
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("transactions");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}borrowers/` + this.$route.params.BorrowerID
    );
    this.ReaderID = res.data.response.ReaderID;
    this.LibrarianID = res.data.response.LibrarianID;
    this.CopyID = res.data.response.CopyID;
    this.DateIssued = res.data.response.DateIssued;
    this.DueDate = res.data.response.DueDate;
    this.DateReturned = res.data.response.DateReturned;
    this.Penalty = res.data.response.Penalty;
    this.Status = res.data.response.Status;
    this.remarks = res.data.response.remarks;
    this.BorrowerID = res.data.response.BorrowerID;
  },

  computed: {
    ...mapGetters({ items: "transactions" }),

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
.buttons{
  margin-top:10px;
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
.rw{
  margin-left:17%;
  width: 84%;
}
.px-3 {
  text-align: center;
  color: #11101d;
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
 #hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
</style>
