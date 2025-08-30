<template>
  <div
    class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer w-80 h-60"
    @click="$emit('select')"
  >
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>

    <!-- İçerik -->
    <div class="relative z-10 flex flex-col justify-end h-full p-6 text-white">
      <p class="uppercase tracking-wide text-sm font-medium opacity-80">{{ subtitle }}</p>
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <span class="inline-flex items-center gap-2 text-sm font-medium hover:underline">
        {{ buttonText }} →
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bg: String,
  subtitle: String,
  title: String,
  buttonText: String
})
defineEmits(['select'])
</script>
