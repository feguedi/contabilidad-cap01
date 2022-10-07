<template>
  <div class="flex flex-col min-w-screen">
    <Nav class="w-full">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
    </Nav>

    <hr class="text-gray-100 w-full lg:max-w-7xl self-center py-1 px-4 border-t-2" />

    <main class="w-full lg:max-w-7xl self-center px-4">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Nav from '../navbar/NavBar.vue';
import NavItem from '../navbar/NavItem.vue';
</script>
