<template>
  <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
    <!-- Logo -->
    <div class="text-2xl font-bold cursor-pointer">
      <NuxtLink to="/">
        <img src="/img/karvise-logo.png" alt="Karvise Logo" class="w-36 md:w-48" />
      </NuxtLink>
    </div>

    <!-- Desktop Menü -->
    <ul class="hidden md:flex gap-6 text-gray-700 font-medium">
      <li v-for="item in menuItems" :key="item.to" class="relative group">
        <!-- Ana Link -->
        <NuxtLink :to="item.to" class="hover:text-blue-600 transition-colors flex items-center gap-1">
          {{ item.label }}
          <span v-if="item.children"> ⮛</span>
        </NuxtLink>

        <!-- Dropdown -->
        <ul v-if="item.children"
          class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
          <li v-for="child in item.children" :key="child.to">
            <NuxtLink :to="child.to" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {{ child.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <!-- Mobile Menü Button -->
    <button class="md:hidden text-gray-700" @click="mobileOpen = !mobileOpen">
      <span v-if="!mobileOpen">☰</span>
      <span v-else>✖</span>
    </button>

    <!-- Mobile Menü -->
    <div v-if="mobileOpen"
      class="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start gap-2 py-4 px-4 md:hidden">
      <div v-for="(item, index) in menuItems" :key="item.to" class="w-full">
        <!-- Eğer children varsa buton gibi davranacak -->
        <div class="flex justify-between items-center w-full">
          <NuxtLink :to="item.to" class="block w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
            @click.prevent="item.children ? toggleMobileDropdown(index) : mobileOpen = false">
            {{ item.label }}
          </NuxtLink>
          <!-- Dropdown indicator -->
          <button v-if="item.children" class="ml-2 text-gray-500" @click="toggleMobileDropdown(index)">
            <span v-if="mobileDropdown === index">⮙</span>
            <span v-else>⮛</span>
          </button>
        </div>

        <!-- Mobile Dropdown -->
        <ul v-if="item.children && mobileDropdown === index" class="pl-4 mt-1 border-l border-gray-300 w-full">
          <li v-for="child in item.children" :key="child.to">
            <NuxtLink :to="child.to" class="block py-1 text-gray-700 hover:text-blue-600 transition-colors"
              @click="mobileOpen = false">
              {{ child.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  theme: { type: String, default: "themeA" }
});

const mobileOpen = ref(false)
const mobileDropdown = ref(null)

const toggleMobileDropdown = (index) => {
  mobileDropdown.value = mobileDropdown.value === index ? null : index
}

const menuItems = computed(() => {
  if (props.theme === "themeA") {
    return [
      { label: "Home", to: "/export-catalog/export-catalog" },
      // { label: "About", to: "/export-catalog/about" },
      // { label: "Services", to: "/export-catalog/services" },
      // { label: "Contact", to: "/export-catalog/contact" },
    ]
  } else {
    return [
      { label: "Ana Sayfa", to: "/dis-ticaret/dis-ticaret" },
      { label: "Hakkımızda", to: "/dis-ticaret/hakkimizda" },
      { label: "Dış Ticaret Danışmanlığı", to: "/dis-ticaret/danismanlik" },
      { label: "Pazarınızı Keşfedin", to: "/dis-ticaret/pazar" },
      {
        label: "Yazılım Çözümlerimiz",
        to: "/dis-ticaret/yazilim",
        children: [
          { label: "ReachSuite", to: "/dis-ticaret/yazilimDetails/reachsuite" },
          { label: "Karvise ERP", to: "/dis-ticaret/yazilimDetails/erp" },
        ]
      },
      { label: "Eğitimlerimiz", to: "/dis-ticaret/egitimler" },
      { label: "İletişim", to: "/dis-ticaret/iletisim" },
    ]
  }
})
</script>
