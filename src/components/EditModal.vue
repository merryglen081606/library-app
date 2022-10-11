<template>
    <div>
        <b-button v-b-modal.modal-form>
            <b-icon class="delete-btn" icon="pencil-square"></b-icon>
        </b-button>

        <b-modal id="modal-form" :title="title">
            <div>
                <form ref="form" v-on:submit.stop.prevent="librarianSubmit">
                  <b-form-group label="Firstname" label-for="Firstname-input">
                    <b-form-input
                      id="Firstname-input"
                      v-model="$v.Firstname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Firstname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.Firstname.required" class="invalid-feedback">
                      The firstname field is required.
                    </div>
                  </b-form-group>

                  <b-form-group label="Middlename" label-for="Middlename-input">
                    <b-form-input id="Middlename-input" v-model="Middlename">
                    </b-form-input>
                  </b-form-group>

                  <b-form-group label="Lastname" label-for="Lastname-input">
                    <b-form-input
                      id="Lastname-input"
                      v-model="$v.Lastname.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Lastname),
                      }"
                    >
                    </b-form-input>
                    <div v-if="!$v.Lastname.required" class="invalid-feedback">
                      The Lastname is required.
                    </div>
                  </b-form-group>

                  <b-form-group
                    label="RegisterDate"
                    label-for="RegisterDate-date"
                    type="date"
                  >
                    <b-form-input
                      type="date"
                      id="RegisterDate-date"
                      v-model="$v.RegisterDate.$model"
                      :class="{
                        'is-invalid': validationStatus($v.RegisterDate),
                      }"
                    >
                    </b-form-input>
                    <div
                      v-if="!$v.RegisterDate.required"
                      class="invalid-feedback"
                    >
                      The Register Date is required.
                    </div>
                  </b-form-group>

                  <b-form-group label="Gender" label-for="Gender-value">
                    <b-form-select
                      class="form-control"
                      v-model="$v.Gender.$model"
                      :class="{
                        'is-invalid': validationStatus($v.Gender),
                      }"
                      id="Gender-select"
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
                    <div v-if="!$v.Gender.required" class="invalid-feedback">
                      The Gender is required.
                    </div>
                  </b-form-group>
                  <div class="buttons">
                    <b-button class="btn-success" @click="librarianSubmit()"
                      >Submit</b-button
                    >
                    <b-button class="close" href="/librarians">Close</b-button>
                  </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>


export default {
    name: "EditModal",
  
    props: {
        title: {
            type: String
        }
    }

}
</script>