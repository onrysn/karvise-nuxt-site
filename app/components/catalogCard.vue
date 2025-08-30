<template>
  <div
    class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
  >
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-500 mb-1">{{ subtitle }}</p>
      <!--<a :href="link" class="text-blue-600 font-medium hover:underline">Detayları Gör →</a>-->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
  link: String
})
</script>
