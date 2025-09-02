<template>
  <div class="relative w-full overflow-hidden rounded-xl shadow-lg">
    <div class="flex transition-transform duration-700" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="slide in slides" :key="slide.id" class="min-w-full relative">
        <img :src="slide.image" :alt="slide.title" class="w-full h-96 object-cover" />
        <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 class="text-3xl font-bold">{{ slide.title }}</h1>
          <h2 class="mt-2 text-lg">{{ slide.subtitle }}</h2>
        </div>
      </div>
    </div>

    <!-- Next / Prev -->
    <button @click="prev" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2">‹</button>
    <button @click="next" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2">›</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  slides: Array
})

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
}

// Otomatik geçiş
onMounted(() => {
  setInterval(next, 5000)
})
</script>
