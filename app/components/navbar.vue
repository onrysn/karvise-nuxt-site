<template>
  <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-[1000]">
    <!-- Logo -->
    <div class="text-2xl font-bold cursor-pointer">
      <NuxtLink to="/">
        <img src="/img/karvise-logo.png" alt="Karvise Logo" class="w-36 md:w-48" />
      </NuxtLink>
    </div>

    <!-- Desktop Menü -->
    <ul class="hidden md:flex gap-8 text-gray-800 font-medium">
      <li v-for="item in menuItems" :key="item.to" class="relative group">
        <NuxtLink :to="item.to" class="hover:text-blue-600 transition-colors flex items-center gap-1">
          {{ item.label }}
          <span v-if="item.children"> ⮛</span>
        </NuxtLink>

        <!-- Desktop Dropdown -->
        <ul
          v-if="item.children"
          class="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-xl transform transition-all duration-300 ease-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 z-[1000]"
        >
          <li v-for="child in item.children" :key="child.to">
            <NuxtLink
              :to="child.to"
              class="block px-5 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg"
            >
              {{ child.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <!-- Mobile Menü Button -->
    <button class="md:hidden text-gray-800 z-[1100]" @click="mobileOpen = !mobileOpen">
      <span v-if="!mobileOpen" class="text-2xl">☰</span>
      <span v-else class="text-2xl">✖</span>
    </button>

    <!-- Mobile Menü Overlay -->
    <transition name="fade">
      <div
        v-show="mobileOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1050]"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- Mobile Menü Panel -->
    <transition name="slide">
      <div
        v-show="mobileOpen"
        class="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg z-[1100] flex flex-col p-6 gap-4 overflow-y-auto"
      >
        <div v-for="(item, index) in menuItems" :key="item.to" class="w-full">
          <div class="flex justify-between items-center">
            <NuxtLink
              :to="item.to"
              class="text-lg font-medium py-3 w-full hover:text-blue-600 transition-colors"
              @click.prevent="item.children ? toggleMobileDropdown(index) : closeMobileMenu()"
            >
              {{ item.label }}
            </NuxtLink>

            <button v-if="item.children" @click="toggleMobileDropdown(index)" class="text-gray-500">
              <span v-if="mobileDropdown === index">⮙</span>
              <span v-else>⮛</span>
            </button>
          </div>

          <!-- Mobile Dropdown -->
          <transition name="slide-fade">
            <ul
              v-show="item.children && mobileDropdown === index"
              class="pl-4 mt-2 border-l border-gray-200 flex flex-col gap-2"
            >
              <li v-for="child in item.children" :key="child.to">
                <NuxtLink
                  :to="child.to"
                  class="py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  @click="closeMobileMenu()"
                >
                  {{ child.label }}
                </NuxtLink>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </transition>
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

const closeMobileMenu = () => {
  mobileOpen.value = false
  mobileDropdown.value = null
}

const menuItems = computed(() => {
  if (props.theme === "themeA") {
    return [
      { label: "Home", to: "/export-catalog/export-catalog" },
      { label: "Products", to: "/export-catalog/products" },
      { label: "About", to: "/export-catalog/about" },
      { label: "Services", to: "/export-catalog/services" },
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

<style>
/* Desktop & mobile dropdown animasyonu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile panel slide */
.slide-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}

/* Overlay fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
