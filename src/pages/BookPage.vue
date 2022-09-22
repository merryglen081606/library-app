<template>
  <body>
    <b-container fluid id="lib">
      <div class="nav">
        <SidebarComponent />
      </div>
      <div class="main">
        <div class="head">
          <h4>Library System/<span>Book</span></h4>
        </div>
        <div class="content">
          <b-card bg-variant="light" class="card">
            <h1>Book Records</h1>
            <template>
              <div>
                <b-button v-b-modal.modal-prevent-closing>Add Book</b-button>
                <b-form-fieldset
                  style="float: right; padding-bottom: 10px"
                  class="col-4"
                >
                  <b-input v-model="filter" placeholder="search..."></b-input>
                </b-form-fieldset>
                <b-modal
                  hide-footer
                  id="modal-prevent-closing"
                  size="m"
                  ref="modal"
                  title="Register Book"
                  @hidden="resetModal"
                >
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group label="Book ID" label-for="BookID-input">
                      <b-form-input id="BookID-input" v-model="BookID" required>
                      </b-form-input>
                    </b-form-group>

                    <b-form-group label="ISBN" label-for="ISBN-input">
                      <b-form-input id="ISBN-input" v-model="ISBN" required>
                      </b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Book Title"
                      label-for="BookTitle-input"
                    >
                      <b-form-input id="BookTitle-input" v-model="BookTitle">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group label="Author ID" label-for="AuthorID-input">
                      <b-form-input id="AuthorID-input" v-model="AuthorID">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group label="Page No" label-for="PageNo-input">
                      <b-form-input id="PageNo-input" v-model="PageNo">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Year Piblish"
                      label-for="Year Piblish-input"
                    >
                      <b-form-input
                        id="YearPiblish-input"
                        v-model="YearPiblish"
                      >
                      </b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Piblisher ID"
                      label-for="PiblisherID-input"
                    >
                      <b-form-input
                        id="PiblisherID-input"
                        v-model="PiblisherID"
                      >
                      </b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Category ID"
                      label-for="CategoryID-input"
                    >
                      <b-form-input id="CategoryID-input" v-model="CategoryID">
                      </b-form-input>
                    </b-form-group>

                    <div class="buttons">
                      <b-button class="btn-success" type="submit"
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
  </body>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "BookPage",
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
      fields: [
        { key: "BookID", label: "Book ID", sortable: true },
        { key: "ISBN", label: "ISBN", sortable: true },
        { key: "BookTitle", label: "Book Title", sortable: true },
        { key: "AuthorID", label: "Author ID", sortable: true },
        { key: "PageNo", label: "Page No.", sortable: true },
        { key: "YearPiblish", label: "Year Piblish", sortable: true },
        { key: "PublisherID", labe: "Publisher ID", sortable: true },
        { key: "CategoryID", label: "Category ID", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
      items: [
        {
          isActive: true,
          BookID: 1,
          ISBN: "Dick",
          BookTitle: "Macdon",
          AuthorID: "Mac",
          PageNo: "578",
          YearPiblish: "1967",
          PublisherID: "576",
          CategoryID: "587",
        },
        {
          isActive: true,
          BookID: 2,
          ISBN: "Di",
          BookTitle: "Mald",
          AuthorID: "Macdonald",
          PageNo: "57",
          YearPiblish: "1957",
          PublisherID: "57",
          CategoryID: "57",
        },
        {
          isActive: false,
          BookID: 3,
          ISBN: "Dickerson",
          BookTitle: "Macdonald",
          AuthorID: "Macdonald",
          PageNo: "57",
          YearPiblish: "1957",
          PublisherID: "57",
          CategoryID: "57",
        },
        {
          isActive: true,
          BookID: 4,
          ISBN: "Dickerson",
          BookTitle: "Macdonald",
          AuthorID: "Macdonald",
          PageNo: "57",
          YearPiblish: "1957",
          PublisherID: "57",
          CategoryID: "57",
        },
      ],
      //items: {
      //BookID: null,
      //ISBN: null,
      //BookTitle: null,
      //AuthorID: null,
      //PageNo: null,
      //YearPiblish: null,
      //PublisherID: null,
      //CategoryID: null,
      // },
      perPage: 2,
      currentPage: 1,
      filter: "",
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
  components: { SidebarComponent },
};
</script>
<style scope>
.nav {
  float: left;
}

.lib .main {
  float: right;
  width: 80%;
  margin-top: 20px;
  background-color: #e4e9f7;
}
.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
  margin-bottom: 40px;
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