<template>
  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title> Add Librarian</template>
    <div class="d-block text-center">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Firstname" label-for="Firstname-input">
          <b-form-input id="Firstname-input" v-model="Firstname" required>
          </b-form-input>
        </b-form-group>

        <b-form-group label="Middlename" label-for="Middlename-input">
          <b-form-input id="Middlename-input" v-model="Middlename" required>
          </b-form-input>
        </b-form-group>

        <b-form-group label="Lastname" label-for="Lastname-input">
          <b-form-input id="Lastname-input" v-model="Lastname"> </b-form-input>
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
          <b-form-select v-model="Gender" id="Gender-select" class="mb-12">
            <b-form-select-option>Please select an option</b-form-select-option>
            <b-form-select-option value="Female">Female</b-form-select-option>
            <b-form-select-option value="Male">Male</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <!-- <b-button class="input" type="submit">Submit</b-button> -->
      </form>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
      >Close Me</b-button
    >

    <b-button class="input" type="submit">Submit</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "AddLibrarians",
};
</script>