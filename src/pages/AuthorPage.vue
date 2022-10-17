<template>
  <b-container fluid id="hero">
    <b-row>
      <SidebarComponent />
      <b-col>
        <b-row class="rw">
          <HeaderCom title="Author" />
        </b-row>

        <b-col class="">
          <b-container d-flex class="AddAccount">
            <!-- <FormInput label="Invoice Number" /> -->
            <b-container class="tebs">
              <!-- <h1>Author Records</h1> -->
              <div class="tbales">
                <b-button variant="dark" v-b-modal.modal-prevent-closing
                  >Add Author</b-button
                >
                <b-form-fieldset
                  style="float: right; padding-bottom: 2px"
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
                  title="Register Publisher"
                  @hidden="resetModal"
                >
                  <form ref="form" v-on:submit.stop.prevent="authorSubmit">
                    <b-form-group label="Firstname" label-for="firstname-input">
                      <b-form-input
                        style="text-transform: capitalize"
                        id="firstname-input"
                        v-model="$v.firstname.$model"
                        :class="{
                          'is-invalid': validationStatus($v.firstname),
                        }"
                      >
                      </b-form-input>
                      <div
                        v-if="!$v.firstname.required"
                        class="invalid-feedback"
                      >
                        Please enter Firstname. (Required Failed)
                      </div>
                    </b-form-group>

                    <b-form-group
                      label="Middlename"
                      label-for="middlename-input"
                    >
                      <b-form-input
                        style="text-transform: capitalize"
                        id="middlename-input"
                        v-model="$v.middlename.$model"
                      >
                      </b-form-input>
                    </b-form-group>

                    <b-form-group label="Lastname" label-for="lastname-input">
                      <b-form-input
                        style="text-transform: capitalize"
                        id="lastname-input"
                        v-model="$v.lastname.$model"
                        :class="{
                          'is-invalid': validationStatus($v.lastname),
                        }"
                      >
                      </b-form-input>
                      <div
                        v-if="!$v.lastname.required"
                        class="invalid-feedback"
                      >
                        Please enter Lastname. (Failed Required)
                      </div>
                    </b-form-group>

                    <div class="buttons">
                      <b-button class="mt-3 btn-success" @click="authorSubmit()"
                        >Submit</b-button
                      >
                      <b-button class="mt-3 btn-warning" type="reset"
                        >Reset</b-button
                      >
                      <b-button
                        class="mt-3"
                        href="/author"
                        variant="outline-danger"
                        block
                        @click="hideModal"
                        >Close</b-button
                      >
                    </div>
                  </form>
                </b-modal>
              </div>

              <b-table
                class="tb"
                responsive
                hover
                id="my-table"
                :items="authors"
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
                    :to="'/editauthor/' + data.item.AuthorID"
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
  name: "AuthorPage",
  components: { SidebarComponent, HeaderCom },
  data() {
    return {
      filter: "",
      firstname: "",
      middlename: "",
      lastname: "",
      action: "",
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: "AuthorID", label: "Author ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
    };
  },

  computed: {
    ...mapGetters({ authors: "authors" }),

    rows() {
      return this.authors.length;
    },
  },

  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
    return await this.$store.dispatch("fetchAuthor");
  },

  validations: {
    firstname: { required },
    middlename: {},
    lastname: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async authorSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.authorList);
        this.$store.dispatch("authorSubmit", {
          firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
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
};
</script>
<style scoped>
.AddAccount {
  float: left;
  margin-left: 20%;
  width: 30%;
}
/* .from {
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
/* .container {
  padding-top: 10px;
  margin-left: 11%;
  width: 90%;
} */
.container {
  padding-top: 10px;
  margin-left: 13%;
  width: 120%;
}
.pill {
  width: 220px;
  margin-top: 10px;
}
.mt-3 {
  margin-right: 5px;
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
</style>
