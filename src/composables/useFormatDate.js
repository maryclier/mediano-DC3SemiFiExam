export function useFormatDate() {

  function formatDate(date) {
    if (!date) {
      return ''
    }

    return new Date(date).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    )
  }

  return {
    formatDate
  }
}