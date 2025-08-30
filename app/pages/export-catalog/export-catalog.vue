<template>
  <div class="flex flex-col gap-16">
    <!-- Slider -->
    <Slider :slides="slides" />

    <!-- Katalog Kartları -->
    <section class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-6">Kataloglar</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CatalogCard v-for="catalog in catalogs" :key="catalog.id" :title="catalog.title" :subtitle="catalog.subtitle"
          :image="catalog.image" :link="catalog.link" />
      </div>
    </section>

    <!-- Hakkımda Bölümü -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

        <!-- İçerik -->
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">About</h2>
          <p class="text-gray-700 mb-6">
            As Karvise Foreign Trade Consulting, we facilitate companies' expansion into international markets and serve as a reliable companion in their export processes. Our goal is to position your business competitively, sustainably, and profitably in various regions of the world, particularly in Europe.
          </p>
        </div>

        <!-- Profil Fotoğrafı -->
        <div class="md:w-1/2 flex justify-center md:justify-end">
  <img
    src="/img/profile.png"
    alt="Profil"
    class="rounded-xl shadow-lg w-48 h-100 md:w-64 md:h-100 object-cover"
  />
</div>


      </div>
    </section>


  </div>
</template>

<script setup>
import Slider from '~/components/slider.vue'
import CatalogCard from '~/components/catalogCard.vue'
import { catalogs, slides } from '~/assets/js/catalogData.js'
</script>
