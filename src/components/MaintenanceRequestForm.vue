<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-request'])

const form = reactive({
  title: '',
  location: '',
  issueType: '',
  requestDate: ''
})

const errorMessage = ref('')

function submitForm() {

  if (
    !form.title ||
    !form.location ||
    !form.issueType ||
    !form.requestDate
  ) {
    errorMessage.value = 'Please fill in all fields.'
    return
  }

  const newRequest = {
    id: Date.now(),
    title: form.title,
    location: form.location,
    issueType: form.issueType,
    requestDate: form.requestDate,
    status: 'Pending'
  }

  emit('add-request', newRequest)

  form.title = ''
  form.location = ''
  form.issueType = ''
  form.requestDate = ''

  errorMessage.value = ''
}
</script>

<template>
  <section class="form-section">

    <h2>Add Maintenance Request</h2>

    <form @submit.prevent="submitForm">

      <div class="form-group">
        <label>Request Title</label>

        <input
          v-model="form.title"
          type="text"
          placeholder="Example: Broken classroom light"
        >
      </div>

      <div class="form-group">
        <label>Location</label>

        <input
          v-model="form.location"
          type="text"
          placeholder="Example: Room 204"
        >
      </div>

      <div class="form-group">
        <label>Issue Type</label>

        <select v-model="form.issueType">
          <option value="">Select issue type</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Furniture">Furniture</option>
          <option value="Cleaning">Cleaning</option>
        </select>
      </div>

      <div class="form-group">
        <label>Request Date</label>

        <input
          v-model="form.requestDate"
          type="date"
        >
      </div>

      <p
        v-if="errorMessage"
        class="error"
      >
        {{ errorMessage }}
      </p>

      <button type="submit">
        Add Maintenance Request
      </button>

    </form>

  </section>
</template>