<template>
  <svg class="svg-icon" aria-hidden="true" v-on="$attrs">
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
})

const iconName = computed((): string => `#${props.name}`)

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