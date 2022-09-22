<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <div class="main">
      <div class="head">
        <h4>Library System/<span>Librarian</span></h4>
      </div>
      <div class="content">
        <b-card bg-variant="light" class="card">
          <h1>Librarian Records</h1>

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
                title="Register Librarian"
                @hidden="resetModal"
              >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                  <b-form-group label="Firstname" label-for="Firstname-input">
                    <b-form-input
                      id="Firstname-input"
                      v-model="Firstname"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Middlename" label-for="Middlename-input">
                    <b-form-input
                      id="Middlename-input"
                      v-model="Middlename"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Lastname" label-for="Lastname-input">
                    <b-form-input id="Lastname-input" v-model="Lastname">
                    </b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="RegisterDate"
                    label-for="RegisterDate-date"
                    type="date"
                  >
                    <b-form-input
                      type="date"
                      id="RegisterDate-date"
                      v-model="RegisterDate"
                      required
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Gender" label-for="Gender-value">
                    <b-form-select
                      v-model="Gender"
                      id="Gender-select"
                      class="select"
                    >
                      <b-form-select-option
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="Female"
                        >Female</b-form-select-option
                      >
                      <b-form-select-option value="Male"
                        >Male</b-form-select-option
                      >
                    </b-form-select>
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
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import axios from "axios";
export default {
  name: "LibrarianPage",
  async mounted() {
    let res = await axios.get("http://172.16.4.182:5000/api/librarian");
    console.warn(res.data.librarianList);
    this.items = res.data.librarianList;
  },
  data() {
    // let res = await axios.get("http://localhost:5000/api/librarian");
    // console.warn(res.data.librarianList);

    return {
      perPage: 10,
      currentPage: 1,
      filter: "",
      Firstname: "",
      Middlename: "",
      Lastname: "",
      RegisterDate: "",
      Gender: "",
      // Status: "",
      fields: [
        { key: "UserID", label: "User ID", sortable: true },
        { key: "Firstname", label: "Firstname", sortable: true },
        { key: "Middlename", label: "Middlename", sortable: true },
        { key: "Lastname", label: "Lastname", sortable: true },
        { key: "RegisterDate", labe: "Register ate", sortable: true },
        { key: "Gender", label: "Gender", sortable: true },
      ],

      items: [],
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://172.16.4.182:5000/api/librarian",
        {
          Firstname: this.Firstname,
          Middlename: this.Middlename,
          Lastname: this.Lastname,
          RegisterDate: this.RegisterDate,
          Gender: this.Gender,
        }
      );
      console.log(response);
    },
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
  width: 85%;
  margin-top: 20px;
}
.main .head {
  background-attachment: fixed;
  background-color: #11101d;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 50px;
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
.main .content {
  width: 80%;
  margin-right: 20px;
  margin-left: 90px;
}
.btn {
  margin-bottom: 10px;
}
.select {
  width: 463px;
  height: 40px;
  border-radius: 8px;
  border-color: light;
  margin-bottom: 10px;
}
.buttons {
  float: right;
}
.close {
  margin-left: 10px;
}
</style>