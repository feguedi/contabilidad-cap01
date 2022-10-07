<template>
  <li>
    <RouterLink :to="href" :class="['block px-4 py-2 rounded-md', { 'bg-amber-100 text-amber-700': isActive }]">
      <slot></slot>
    </RouterLink>
  </li>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});

const route = useRoute();

const href = computed(() => props.href);
const isActive = computed(() => route.path === props.href);
</script>
