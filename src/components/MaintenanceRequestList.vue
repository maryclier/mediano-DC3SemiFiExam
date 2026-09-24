<script setup>
import MaintenanceRequestItem from './MaintenanceRequestItem.vue'

defineProps({
  requests: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'resolve-request',
  'delete-request'
])

function resolveRequest(id) {
  emit('resolve-request', id)
}

function deleteRequest(id) {
  emit('delete-request', id)
}
</script>

<template>
  <section class="list-section">

    <h2>Maintenance Requests</h2>

    <p v-if="requests.length === 0">
      No maintenance requests yet.
    </p>

    <div v-else>

      <MaintenanceRequestItem
        v-for="request in requests"
        :key="request.id"
        :request="request"
        @resolve-request="resolveRequest"
        @delete-request="deleteRequest"
      />

    </div>

  </section>
</template>