<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$attrs" :style="{ color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

const iconName = computed((): string => `#icon-${props.name}`)

const svgClass = computed((): string => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  } else {
    return 'svg-icon'
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>