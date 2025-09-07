<script setup>
import { useRoute } from 'vue-router'
const { data: softwares } = await useAsyncData('softwares', () => $fetch('/api/softwares'))

const route = useRoute()
const softwareDetail = computed(() =>
  softwares.value?.find(s => s.slug === route.params.slug)
)
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <h1 v-if="softwareDetail?.details" class="text-4xl font-bold mb-6">
        {{ softwareDetail.details.headline }}
      </h1>
      <p v-if="softwareDetail?.details" class="text-lg text-gray-600 mb-8">
        {{ softwareDetail.details.intro }}
      </p>

      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <img v-if="softwareDetail.logo" :src="softwareDetail.logo" alt="" class="h-40 w-auto object-contain" />
      </div>

      <!-- Özellikler -->
      <div v-if="softwareDetail.details.features" class="grid md:grid-cols-2 gap-6 mb-12">
        <div v-for="(f, i) in softwareDetail.details.features" :key="i" class="bg-white rounded-xl shadow-md p-6">
          <div class="text-3xl mb-2">{{ f.icon }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ f.title }}</h3>
          <p class="text-gray-600">{{ f.text }}</p>
        </div>
      </div>

      <!-- Neden ReachSuite? -->
      <div v-if="softwareDetail.details.why" class="mb-12">
        <h2 class="text-2xl font-bold mb-4">Neden {{ softwareDetail.title }}?</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li v-for="(w, i) in softwareDetail.details.why" :key="i">{{ w }}</li>
        </ul>
      </div>

      <!-- ERP için ek bloklar -->
      <div v-if="softwareDetail.details.reporting" class="mb-12">
        <h2 class="text-2xl font-bold mb-4">📊 Raporlama ve Uyarı Sistemi</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li v-for="(r, i) in softwareDetail.details.reporting" :key="i">
            <strong>{{ r.title }}:</strong> {{ r.text }}
          </li>
        </ul>
      </div>

      <div v-if="softwareDetail.details.platform" class="mb-12">
        <h2 class="text-2xl font-bold mb-4">🌐 Çoklu Platform Desteği</h2>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li v-for="(p, i) in softwareDetail.details.platform" :key="i">{{ p }}</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <a href="mailto:info@karvise.com"
          class="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition">
          {{ softwareDetail.details.cta }}
        </a>
      </div>
    </div>
  </section>
</template>
