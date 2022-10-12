<template>
  <b-container fluid id="lib">
    <div class="nav">
      <SidebarComponent />
    </div>
    <b-row>
      <b-col xl="10" lg="9" sm="9">
             <HeaderCom title="Author" />
        <!-- <div class="head">
          <h4>Library System/ <span>UpdateLibrarian</span></h4>
        </div> -->
        <b-container fluid class="pt-2">
          <b-row class="d-flex justify-content-center my-3">
            <b-col xl="6" class="py-2">
              <b-col class="">
                <b-container class="container-card rounded p-3">
                  <h4 class="px-3">Update Librarian Information</h4>
                  <b-row class="form">
                    <b-col cols="12" class="mt-3">
                      <b-form v-on:submit.prevent="updateBookCopy">
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
                          <b-button class="btn-success" @click="updateBookCopy()"
                            >Submit</b-button
                          >
                          <!-- <router-link class="close-btn" to="/account">
                            Close
                          </router-link> -->
                          <b-button class="btn-dark" to="/copies">
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
import { mapGetters } from "vuex";
import HeaderCom from "../layout/HeaderCom.vue";
import { required} from "vuelidate/lib/validators";

export default {
  name: "EditBookCopy",
  components: {
    SidebarComponent, HeaderCom,
  },
  data() {
    return {
      copyID: null,
      copyNo: null,
      b_bookID: null,
      b_shelfID: null,
    };
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
    async updateBookCopy() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      try {
        console.log("newsup", this.bookCopyList);
        this.$store.dispatch("updateBookCopy", {
           copyID: this.copyID,
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
  beforeCreate() {
    this.$store.dispatch("bookcopy");
  },
  async mounted() {
    const res = await axios.get(
      `${api.apiurl}bookcopy/` + this.$route.params.copyID
    );
    this.copyID = res.data.response.copyID;
    this.copyNo = res.data.response.copyNo;
    this.b_bookID = res.data.response.b_bookID;
      this.b_shelfID = res.data.response.b_shelfID;
  },

  computed: {
    ...mapGetters({ bookcopy: "bookcopy" }),
    rows() {
      return this.bookcopy.length;
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
.head h4 span {
  color: #eeb34b;
  font-family: montserrat;
}
.container-card {
  background-color: #595959;
  align-content: center;
  justify-content: center;
  margin-left: 200px;
  width: 590px;
  margin-top: 50px;
  color: #ffff;
  
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
.px-3 {
  text-align: center;
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
@media (max-width: 1361px)
 {
  .container-card{
     margin-left: 80px;
      width: 420px;
  }

 }
</style>
