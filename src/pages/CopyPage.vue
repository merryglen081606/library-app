<template>
  <b-container fluid id="hero">
    <b-col class="cl">
      <div class="navigation">
        <SidebarComponent />
      </div>
    </b-col>
    <b-row>
      <div fluid class="main-tab">
        <b-row class="rw">
          <HeaderCom title="Book Copy" />
        </b-row>
        <b-col fluid class="cd">
          <div class="contents">
            <b-card bg-variant="light" class="cards">
              <div class="title">Librarian Records</div>

              <!--Start  Modal Insert Data Code-->
              <template>
                <div>
                  <b-button
                    class="selectbtn"
                    variant="dark"
                    v-b-modal.modal-prevent-closing
                    >Add Book</b-button
                  >

                  <b-button
                    class="selectbtn"
                    squared
                    variant="outline-secondary"
                    to="/shelves"
                  >
                    <b-icon icon="bookshelf"></b-icon> Book Shelf</b-button
                  >
                  <b-button
                    class="selectbtn"
                    squared
                    variant="outline-secondary"
                    to="/category"
                    ><b-icon icon="book-half"></b-icon> Book Category</b-button
                  >

                  <b-button
                    class="selectbtn"
                    to="/subcategory"
                    squared
                    variant="outline-secondary"
                    ><b-icon icon="book-fill"></b-icon> Book
                    Sub-category</b-button
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
                    title="Register Book Copy"
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

                      <b-form-group
                        label="Book Title"
                        label-for="b_bookID-input"
                      >
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
                        <b-button class="mt-3 btn-success" @click="bookcopySubmit()"
                          >Submit</b-button
                        >
                        <b-button class="mt-3 btn-warning" type="reset"
                      >Reset</b-button
                    >
                        <b-button
                          class="mt-3"
                          variant="outline-danger"
                          block
                          @click="hideModal"
                          >Close Me</b-button
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
                  >
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
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import HeaderCom from "../layout/HeaderCom.vue";

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
      Action: null,
      fields: [
        { key: "copyID", label: "Copy ID", sortable: true },
        { key: "copyNo", label: "Copy No", sortable: true },
        { key: "Title", label: "Book Title", sortable: true },
        { key: "location", label: "Shelf Location", sortable: true },
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
    hideModal() {
      this.$refs["modal"].hide();
    },
  },
  components: { SidebarComponent, HeaderCom },
};
</script>
<style scoped>
/* .main {
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
} */
.main-tab {
  padding-left: auto;
}
.header {
  margin-top: 10px;
  margin-left: auto;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  width: 80%;
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
  margin-right: auto;
  width: 100%;
}

.title {
  text-align: center;
  color: #11101d;
  font-family: monospace;
  font-weight: bolder;
  font-size: 30px;
}
.rw{
  margin-left:17%;
  width: 84%;
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
  padding-left:2px;
}
.mt-3{
  margin-left: 2px;
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
.selectbtn {
  margin-right: 5px;
}
#hero {
  background: linear-gradient(to top, #fefeff 30%, #e2e2f6 90%) no-repeat;
  width: 100%;
  height: 100vh;
}
</style>
