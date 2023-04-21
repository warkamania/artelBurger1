<template>
  <q-page>
    <div>
      <p class="error">{{ error }}</p>
      <p class="decode-result">Last result: <b>{{ result }}</b></p>
      <qrcode-stream @decode="onDecode" @init="onInit" :key="_uid" />
    </div>
  </q-page>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';

export default {

  components: { QrcodeStream },

  data() {
    const options = [
      { text: "nothing (default)", value: this.paintBoundingBox },
      { text: "outline", value: this.paintOutline },
      { text: "centered text", value: this.paintCenterText },
      { text: "bounding box", value: this.paintBoundingBox },
    ]

    const selected = options[1]
    return {
      result: '',
      error: '',
      selected,
      options
    }
  },

  methods: {
    onDecode(result) {
      this.result = result
    },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
    paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode

        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: rgb(255, 0, 0);
}
</style>

