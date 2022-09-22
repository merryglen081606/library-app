<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Borrow Book</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Borrower Records</h1>
          <!-- <router-link to="/add-librarian" class="btn btn-dark" exact
            >Add Borrower</router-link
          > -->
          <b-form-fieldset
            style="float: right; padding-bottom: 10px"
            class="col-4"
          >
            <b-input v-model="filter" placeholder="search..."></b-input>
          </b-form-fieldset>

          <template>
            <div>
              <b-button v-b-modal.modal-prevent-closing>Add Book</b-button>
              <!-- <b-form-fieldset
                style="float: right; padding-bottom: 10px"
                class="col-4"
              >
                <b-input v-model="filter" placeholder="search..."></b-input>
              </b-form-fieldset> -->
              <b-modal
                hide-footer
                id="modal-prevent-closing"
                size="m"
                ref="modal"
                title="Register Librarian"
                @hidden="resetModal"
              >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                  <b-form-group label="Reader ID" label-for="ReaderID-input">
                    <b-form-input
                      id="ReaderID-input"
                      v-model="ReaderID"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Copy ID" label-for="CopyID-input">
                    <b-form-input id="CopyID-input" v-model="CopyID" required>
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Librarian Issued"
                    label-for="LibrarianID-input"
                  >
                    <b-form-input
                      id="LibrarianID-input"
                      v-model="LibrarianID"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Date Issued"
                    label-for="DateIssued-input"
                  >
                    <b-form-input
                      id="DateIssued-input"
                      type="date"
                      v-model="DateIssued"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Date Issued"
                    label-for="DateIssued-input"
                  >
                    <b-form-input
                      id="DateIssued-input"
                      type="date"
                      v-model="DateIssued"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Date Return"
                    label-for="DateReturn-date"
                    type="date"
                  >
                    <b-form-input
                      type="date"
                      id="DateReturn-date"
                      v-model="DateReturn"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Quantity" label-for="Quantity-input">
                    <b-form-input
                      id="Quantity-input"
                      v-model="Quantity"
                      type="number"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Penalty" label-for="Penalty-input">
                    <b-form-input
                      id="Penalty-input"
                      v-model="Penalty"
                      type="number"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Status" label-for="Status-value">
                    <b-form-select
                      v-model="Status"
                      id="Status-select"
                      class="select"
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

                  <b-form-group label="Remarks" label-for="Remarks-input">
                    <b-form-input
                      id="Remarks-input"
                      v-model="Remarks"
                      type="text"
                      required
                    >
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
  name: "BorrowPage",
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      fields: [
        { key: "BorrowID", label: "Borrow ID", sortable: true },
        { key: "ReaderID", label: "Reader ID", sortable: true },
        { key: "LibrarianID", label: "Librarian Issued", sortable: true },
        { key: "CopyID", label: "Copy ID", sortable: true },
        { key: "DateIssued", label: "Date Issued", sortable: true },
        { key: "DateReturn", label: "Date Return", sortable: true },
        { key: "Quantity", label: "Quantity", sortable: true },
        { key: "Penalty", label: "Penalty", sortable: true },
        { key: "Status", label: "Status", sortable: true },
        { key: "Remarks", label: "Remarks", sortable: true },
        { key: "Action", label: "Action", sortable: true },
      ],
      items: {
        BorrowID: null,
        ReaderID: null,
        CopyID: null,
        DateIssued: null,
        DateReturn: null,
        Quantity: null,
        Penalty: null,
        Status: null,
        Remarks: null,
      },
    };
  },
  computed: {
    rows() {
      return this.items.length;
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