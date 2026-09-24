import { ref } from 'vue'

const maintenanceRequests = ref([])

export function useMaintenance() {

  function loadRequests() {
    const savedRequests = localStorage.getItem(
      'maintenanceRequests'
    )

    if (savedRequests) {
      maintenanceRequests.value = JSON.parse(savedRequests)
    }
  }

  function saveRequests() {
    localStorage.setItem(
      'maintenanceRequests',
      JSON.stringify(maintenanceRequests.value)
    )
  }

  function addRequest(request) {
    maintenanceRequests.value.push(request)
    saveRequests()
  }

  function resolveRequest(id) {
    const request = maintenanceRequests.value.find(
      item => item.id === id
    )

    if (request) {
      request.status = 'Resolved'
      saveRequests()
    }
  }

  function removeRequest(id) {
    maintenanceRequests.value =
      maintenanceRequests.value.filter(
        item => item.id !== id
      )

    saveRequests()
  }

  return {
    maintenanceRequests,
    loadRequests,
    addRequest,
    resolveRequest,
    removeRequest
  }
}