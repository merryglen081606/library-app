<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <HeaderCom title="Account" />

        <b-col class="">
          <b-container d-flex class="AddAccount">
           
             
               
                  <!-- <FormInput label="Invoice Number" /> -->
               <b-container class="tebs">
                <h1>Publisher Records</h1>
                <div>
              <b-button variant="dark" v-b-modal.modal-prevent-closing
                >Add Publisher</b-button
              >
              <b-modal
                hide-footer
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Publisher"
                @hidden="resetModal"
              >
                <form ref="form" v-on:submit.stop.prevent="publisherSubmit">
                  <b-form-group label="Firstname" label-for="firstname-input">
                    <b-form-input
                      id="firstname-input"
                      v-model="$v.firstname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.firstname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.firstname.required" class="invalid-feedback">
                      Please enter Firstname. (Required Failed)
                    </div>
                  </b-form-group>

                  <b-form-group label="Middlename" label-for="middlename-input">
                    <b-form-input
                      id="middlename-input"
                      v-model="$v.middlename.$model"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Lastname" label-for="lastname-input">
                    <b-form-input
                      id="lastname-input"
                      v-model="$v.lastname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.lastname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.lastname.required" class="invalid-feedback">
                      Please enter Lastname. (Failed Required)
                    </div>
                  </b-form-group>

                  <b-form-group label="Location" label-for="location-input">
                    <b-form-input
                      id="location-input"
                      v-model="$v.location.$model"
                      :class="{
                        'is-invalid': validationStatus($v.location),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.location.required" class="invalid-feedback">
                      Please select Location. (Failed Required)
                    </div>
                  </b-form-group>

                  <div class="buttons">
                    <b-button class="btn-success" @click="publisherSubmit()"
                      >Submit</b-button
                    >
                    <b-button class="close" block @click="hideModal"
                      >Close</b-button
                    >
                  </div>
                </form>
              </b-modal>
            </div>
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
                        :items="publishers"
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
                                :to="'/editpublisher/' + data.item.publisherID"
                                class="btn btn-success edits"
                                >UPDATE
                                <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                            </router-link> 
                      
                        </template>
                        </b-table>
                

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
          </b-container>
          </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderCom from "../layout/HeaderCom.vue";


import { required } from "vuelidate/lib/validators";

import { mapGetters } from "vuex";
export default {
  name: "PageAccount",
  components: { SidebarComponent, HeaderCom },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      filter: "",
      firstname: "",
      middlename: "",
      lastname: "",
      location: "",

      // Status: "",
     fields: [
        { key: "publisherID", label: "Publisher ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "Location", label: "Location", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ publishers:  "publishers" }),

    rows() {
        return this.publishers.length;
    },
  },

 async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return await this.$store.dispatch("fetchPublisher");
  },

  validations: {
    firstname: { required },
    middlename: {},
    lastname: { required },
    location: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async publisherSubmit()  {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.publisherList);
        this.$store.dispatch("publisherSubmit", {
       firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
          location: this.location,
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
  margin-left: 20%;
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
