<template style="background-color: #c5eeef">
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Add Book</span></h4>
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
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Book"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
              >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                  <b-form-group
                    label="Book ISBN:"
                    label-for="name-input"
                    invalid-feedback="Book Title"
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Book Title:"
                    label-for="name-input"
                    invalid-feedback="Book Title"
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Author ID:"
                    label-for="name-input"
                    invalid-feedback="Author ID"
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Page No.:"
                    label-for="name-input"
                    invalid-feedback="Page No."
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Category ID:"
                    label-for="name-input"
                    invalid-feedback="Category ID"
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Publisher Year:"
                    label-for="name-input"
                    invalid-feedback="Publisher Year"
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Publisher ID:"
                    label-for="name-input"
                    invalid-feedback="Publisher ID"
                    :state="nameState"
                  >
                    <b-form-input
                      style="margin-bottom: 10px"
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                    ></b-form-input>
                  </b-form-group>
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
          ></b-table>
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
.main {
  float: right;
  width: 80%;
  margin-top: 20px;
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
