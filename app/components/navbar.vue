<template>
  <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="text-2xl font-bold text-blue-600 cursor-pointer">
      <NuxtLink to="/">KarVise</NuxtLink>
    </div>

    <!-- Menü -->
    <ul class="hidden md:flex gap-6 text-gray-700 font-medium">
      <li v-for="item in menuItems" :key="item.to">
        <NuxtLink
          :to="item.to"
          class="hover:text-blue-600 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Mobile Menü Button -->
    <button class="md:hidden text-gray-700" @click="toggleMobile">
      <span v-if="!mobileOpen">☰</span>
      <span v-else>✖</span>
    </button>

    <!-- Mobile Menü -->
    <div
      v-if="mobileOpen"
      class="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6"
    >
      <NuxtLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="text-lg font-medium text-gray-700 hover:text-blue-600"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "themeA",
  },
});

const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);

const menuItems = computed(() => {
  if (props.theme === "themeA") {
    return [
      { label: "Home", to: "/export-catalog/export-catalog" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Contact", to: "/contact" },
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
