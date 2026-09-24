<script setup>
import { useFormatDate } from '../composables/useFormatDate'

defineProps({
  request: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'resolve-request',
  'delete-request'
])

const { formatDate } = useFormatDate()

function resolveRequest(id) {
  emit('resolve-request', id)
}

function deleteRequest(id) {
  emit('delete-request', id)
}
</script>

<template>
  <article class="request-card">

    <h3>{{ request.title }}</h3>

    <p>
      <strong>Location:</strong>
      {{ request.location }}
    </p>

    <p>
      <strong>Issue Type:</strong>
      {{ request.issueType }}
    </p>

    <p>
      <strong>Request Date:</strong>
      {{ formatDate(request.requestDate) }}
    </p>

    <p>
      <strong>Status:</strong>

      <span
        :class="{
          resolved: request.status === 'Resolved',
          pending: request.status === 'Pending'
        }"
      >
        {{ request.status }}
      </span>
    </p>

    <div class="actions">

      <button
        v-if="request.status !== 'Resolved'"
        @click="resolveRequest(request.id)"
      >
        Mark as Resolved
      </button>

      <button
        class="delete-button"
        @click="deleteRequest(request.id)"
      >
        Delete
      </button>

    </div>

  </article>
</template>