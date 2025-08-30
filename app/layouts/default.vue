<template>
  <div>
    <Navbar :theme="theme" />
    <NuxtPage />
    <Footer :theme="theme"  />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { ref, onMounted } from 'vue'

const theme = ref('themeA')

onMounted(() => {
  const savedTheme = localStorage.getItem('siteTheme')
  if (savedTheme) theme.value = savedTheme
})
</script>
