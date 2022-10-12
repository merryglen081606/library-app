<template>
  <b-container fluid id="lib">
      <div class="navigation">
        <SideBar />
      </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Book Copies</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Book Records</h1>
          <b-form-fieldset
            style="float: right; padding-bottom: 10px"
            class="col-4"
          >
            <b-input v-model="filter" placeholder="Type here to Search..."></b-input>
          </b-form-fieldset>
          <template>
            <div>
              <b-button v-b-modal.modal-prevent-closing>Add Book Copies</b-button>
              <b-button href="/shelves" style="margin-left:5px;">Book Shelves</b-button>
              <b-modal
                hide-footer
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Book Copies"
                @hidden="resetModal"
              >
                <form ref="form" v-on:submit.stop.prevent="bookcopySubmit">

                    <b-form-group label="Copy NO" label-for="copyNo-input">
                      <b-form-input
                        id="Copy No-input"
                        v-model="$v.copyNo.$model"
                        :class="{
                          'is-invalid': validationStatus($v.copyNo),
                        }"
                      >
                      </b-form-input>
                      <div
                        v-if="!$v.copyNo.required"
                        class="invalid-feedback"
                      >
                        The Copy No is required.
                      </div>
                    </b-form-group>

                      <b-form-group label="Book Title" label-for="b_bookID-input">
                      <b-form-input
                        id="b_bookID-input"
                        v-model="$v.b_bookID.$model"
                        :class="{
                          'is-invalid': validationStatus($v.b_bookID),
                        }"
                      >
                      </b-form-input>
                      <div
                        v-if="!$v.b_bookID.required"
                        class="invalid-feedback"
                      >
                        The Book title No is required.
                      </div>
                    </b-form-group>

                      <b-form-group label="Shelf" label-for="b_shelfID-input">
                      <b-form-input
                        id="b_shelfID-input"
                        v-model="$v.b_shelfID.$model"
                        :class="{
                          'is-invalid': validationStatus($v.b_shelfID),
                        }"
                      >
                      </b-form-input>
                      <div
                        v-if="!$v.b_shelfID.required"
                        class="invalid-feedback"
                      >
                        The Shelf title No is required.
                      </div>
                    </b-form-group>
                  <div class="buttons">
                    <b-button class="btn-success" @click="bookcopySubmit()"
                      >Submit</b-button
                    >
                    <b-button class="close" block @click="hideModal"
                      >Close</b-button
                    >
                  </div>
                </form>
              </b-modal>
            </div>
          </template>

          <b-table
            responsive
            striped
            bordered
            hover
            id="my-table"
            :items="bookcopy"
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
                      :to="'/editbookcopy/' + data.item.copyID"
                      class="btn btn-success edits"
                      >UPDATE
                      <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                    </router-link>
                    </template>
          </b-table>
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
import SideBar from "../components/SideBar.vue";
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  name: "CopyPage",

  data() {
    return {
      perPage: 2,
      currentPage: 1,
      filter: "",
      copyID: null,
      copyNo: null,
      b_bookID: null,
      b_shelfID: null,
      Action:null,
      fields: [
        { key: "copyID", label: "Copy ID", sortable: true },
        { key: "copyNo", label: "Copy No", sortable: true },
        { key: "b_bookID", label: "Book ID", sortable: true },
        { key: "b_shelfID", label: "Shelf ID", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
      // items: {
      //   CopyID: null,
      //   CopyNo: null,
      //   BookID: null,
      //   ShelfID: null,
      // },
    };
  },
  
  computed: {
    ...mapGetters({ bookcopy: "bookcopy" }),

    rows() {
      return this.bookcopy.length;
    },
  },

  async mounted() {
    return await this.$store.dispatch("fetchBookcopy");
  },

  validations: {
    copyNo: { required },
    b_bookID: { required },
    b_shelfID: { required },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async bookcopySubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookCopyList);
        this.$store.dispatch("bookcopySubmit", {
          copyNo: this.copyNo,
          b_bookID: this.b_bookID,
          b_shelfID: this.b_shelfID,
        });
        alert("Data Successfully Submitted");
      } catch (error) {
        alert("Invalid User");
      }
    },
  },
  components: { SideBar },
};
</script>
<style scope>

.main {
  float: right;
  width: 80%;
  margin-top: 20px;
}
.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
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
.content {
  width: 90%;
  margin-left: 80px;
}
</style>