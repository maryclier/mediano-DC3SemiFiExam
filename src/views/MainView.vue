<script setup>
import { onMounted, computed } from 'vue'

import MaintenanceRequestForm from '../components/MaintenanceRequestForm.vue'
import MaintenanceRequestList from '../components/MaintenanceRequestList.vue'

import { useMaintenance } from '../composables/useMaintenance'

const {
  maintenanceRequests,
  loadRequests,
  addRequest,
  resolveRequest,
  removeRequest
} = useMaintenance()

onMounted(() => {
  loadRequests()
})

const pendingRequests = computed(() => {
  return maintenanceRequests.value.filter(
    request => request.status === 'Pending'
  ).length
})

function handleAddRequest(request) {
  addRequest(request)
}

function handleResolveRequest(id) {
  resolveRequest(id)
}

function handleDeleteRequest(id) {
  removeRequest(id)
}
</script>

<template>
  <div>

    <div class="page-heading">
      <h2>Maintenance Management</h2>

      <p>
        Pending Requests:
        <strong>{{ pendingRequests }}</strong>
      </p>
    </div>

    <MaintenanceRequestForm
      @add-request="handleAddRequest"
    />

    <MaintenanceRequestList
      :requests="maintenanceRequests"
      @resolve-request="handleResolveRequest"
      @delete-request="handleDeleteRequest"
    />

  </div>
</template>