import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useWakeLock() {
  const wakeLock = ref<WakeLockSentinel | null>(null)
  const isActive = ref(false)

  const requestWakeLock = async () => {
    if (isActive.value) return
    try {
      wakeLock.value = await navigator.wakeLock.request('screen')
      isActive.value = true
      console.log('Wake Lock acquired')

      wakeLock.value.addEventListener('release', () => {
        console.log('Wake Lock released')
        isActive.value = false
      })
    } catch (err) {
      console.error('Wake Lock request failed:', err)
    }
  }

  const releaseWakeLock = async () => {
    if (wakeLock.value) {
      await wakeLock.value.release()
      console.log('Wake Lock manually released')
      wakeLock.value = null
      isActive.value = false
    }
  }

  const toggleWakeLock = () => {
    if (isActive.value) {
      releaseWakeLock()
    } else {
      requestWakeLock()
    }
  }

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible' && isActive.value && !wakeLock.value) {
      requestWakeLock()
    }
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)

    requestWakeLock()
  })

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    releaseWakeLock()
  })

  return {
    wakeLock,
    isActive,
    requestWakeLock,
    releaseWakeLock,
    toggleWakeLock,
  }
}
