<template>
  <q-page>
    <div>
      <p class="error">{{ error }}</p>
      <p class="decode-result">Последний результат: <b>{{ result }}</b></p>
      <qrcode-stream @decode="onDecode" :track="paintBoundingBox" @init="logErrors" :camera="camera">
      </qrcode-stream>
      <div v-if="validationSuccess" class="validation-success">
        This is a URL
      </div>
    </div>
  </q-page>
</template>

<script>
import { QrcodeStream, QrcodeDropZone } from 'vue-qrcode-reader';

export default {

  components: { QrcodeStream },

  data() {
    const options = [

      { text: "nothing (default)", value: this.paintBoundingBox },
      { text: "bounding box", value: this.paintBoundingBox },
    ]

    const selected = options[1]
    return {
      result: null,
      error: '',
      camera: 'auto',
      isValid: undefined,
      selected,
      options
    }
  },
  computed: {
    validationSuccess() {
      return this.isValid === true
    },
    validationFailure() {
      return this.isValid === false
    }
  },

  methods: {
    async onDecode(content) {
      this.result = content
      this.turnCameraOff()
      await this.timeout(3000)
      this.isValid = result.startsWith('http')
      await this.timeout(2000)
      this.turnCameraOn()
    },


    paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode

        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },
    logErrors(promise) {
      promise.catch(console.error)
    },
    turnCameraOn() {
      this.camera = 'auto'
    },
    turnCameraOff() {
      this.camera = 'off'
    },
    timeout(ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    },

  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: rgb(255, 0, 0);
}

.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.validation-success {
  color: green;
}

.validation-failure {
  color: red;
}
</style>

