<template>
  <footer class="bg-gray-900 text-gray-300 py-12 mt-16">
    <div class="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">

      <!-- Logo & Hakkımızda kısa -->
      <div class="flex-1">
        <NuxtLink to="/">
          <img 
            src="/img/karvise-logo.png" 
            alt="Karvise Logo"
            class="w-36 md:w-48 mb-4 bg-white p-2 rounded-lg shadow-lg" 
          />
        </NuxtLink>
        <p class="text-gray-300 text-sm">
          Modern çözümlerle işinizi büyütün. Dış ticaret ve yazılım alanında güvenilir partneriniz.
        </p>
      </div>

      <!-- Menü -->
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-white mb-4">Hızlı Erişim</h3>
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.to">
            <NuxtLink 
              :to="item.to" 
              class="hover:text-blue-400 transition-colors duration-200"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Sosyal Medya -->
      <div class="flex-1">
        <div class="flex gap-4 mt-4 text-3xl">
          <a href="#" class="hover:text-blue-500 transition-colors">📘</a> <!-- Facebook -->
          <a href="#" class="hover:text-pink-500 transition-colors">📸</a> <!-- Instagram -->
          <a href="#" class="hover:text-red-500 transition-colors">▶️</a> <!-- YouTube -->
        </div>
      </div>

    </div>

    <!-- Alt Not -->
    <div class="text-center text-gray-500 mt-10 text-sm border-t border-gray-700 pt-4">
      © 2025 Karvise. Tüm hakları saklıdır.
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  theme: { type: String, default: "themeA" }
});

const menuItems = computed(() => {
  if (props.theme === "themeA") {
    return [
      { label: "Home", to: "/export-catalog/export-catalog" },
      { label: "About", to: "/export-catalog/about" },
      { label: "Services", to: "/export-catalog/services" },
      { label: "Contact", to: "/export-catalog/contact" },
    ];
  } else {
    return [
      { label: "Ana Sayfa", to: "/dis-ticaret/dis-ticaret" },
      { label: "Hakkımızda", to: "/dis-ticaret/hakkimizda" },
      { label: "Dış Ticaret Danışmanlığı", to: "/dis-ticaret/danismanlik" },
      { label: "Pazarınızı Keşfedin", to: "/dis-ticaret/pazar" },
      { label: "Yazılım Çözümlerimiz", to: "/dis-ticaret/yazilim" },
      { label: "Eğitimlerimiz", to: "/dis-ticaret/egitimler" },
      { label: "İletişim", to: "/dis-ticaret/iletisim" },
    ];
  }
});
</script>
