<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Loading / Error -->
    <div v-if="pending" class="flex justify-center items-center py-40 text-gray-400 text-xl">
      ⏳ Yükleniyor...
    </div>
    <div v-else-if="error" class="flex justify-center items-center py-40 text-red-500 text-xl">
      Ürün bulunamadı
    </div>

    <div v-else-if="product" class="bg-white shadow-2xl rounded-2xl p-8 flex flex-col lg:flex-row gap-10">

      <!-- Slider Görseller -->
      <div class="lg:w-1/2 relative overflow-hidden rounded-2xl shadow-lg">
        <!-- Slider Wrapper -->
        <div class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${selectedImage * 100}%)` }">
          <img v-for="(img, idx) in product.imgProductDetail" :key="idx" :src="img" @click="openLightbox(idx)"
            class="w-full h-96 object-contain flex-shrink-0 cursor-zoom-in" />
        </div>

        <!-- Slider Kontrolleri -->
        <button @click="manualPrev"
          class="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 hover:bg-white/70 rounded-full shadow-md transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button @click="manualNext"
          class="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/30 hover:bg-white/70 rounded-full shadow-md transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Thumbnail'lar -->
        <div class="flex gap-2 overflow-x-auto mt-4">
          <img v-for="(img, idx) in product.imgProductDetail" :key="idx" :src="img" @click="selectedImage = idx"
            :class="['cursor-pointer rounded-lg border-2', selectedImage === idx ? 'border-blue-500' : 'border-transparent']"
            class="h-20 object-contain" />
        </div>
      </div>

      <!-- Detay Bilgiler - Modernize Edilmiş -->
      <div class="lg:w-1/2 flex flex-col justify-between">
        <div class="mb-6">
          <h1 class="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">{{ product.title }}</h1>
          <h2 class="text-lg text-gray-500 mb-4">{{ product.subtitle }}</h2>
          <!-- Alt çizgi -->
          <div class="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>

          <p class="whitespace-pre-line text-gray-700 leading-relaxed mb-6">{{ product.productDetail }}</p>

          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl font-extrabold text-blue-600 bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              {{ product.price }}
            </span>
          </div>
        </div>

        <div class="flex gap-4 flex-wrap">
          <a :href="`https://wa.me/905073675004?text=Merhaba, ${encodeURIComponent(product.title)} hakkında bilgi almak istiyorum.`"
            target="_blank"
            class="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-600 hover:scale-105 transition transform shadow-lg text-center">
            <i class="pi pi-whatsapp text-white text-lg"></i>
            WhatsApp ile Sor
          </a>

          <NuxtLink to="/export-catalog/products"
            class="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 hover:scale-105 transition transform text-center shadow-sm">
            <i class="pi pi-angle-left text-lg"></i>
            Ürünlere Geri Dön
          </NuxtLink>
        </div>
      </div>

    </div>

    <!-- Lightbox -->
    <div v-if="lightboxActive"
      class="fixed top-0 left-0 w-screen h-screen bg-black/80 flex items-center justify-center z-[9999]"
      @click="lightboxActive = false">
      <img :src="lightboxImage" class="max-h-[90vh] max-w-[90vw] object-contain" @click.stop />
    </div>
    <div v-if="product?.description" class="bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h3 class="text-2xl font-bold mb-4">Ürün Açıklaması</h3>
      <div class="text-gray-700 leading-relaxed whitespace-pre-line max-h-96 overflow-y-auto">
        {{ product.description }}
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue';

const route = useRoute();
const product = ref(null);
const pending = ref(true);
const error = ref(null);
const selectedImage = ref(0);
const lightboxActive = ref(false);
const lightboxImage = ref(null); // Lightbox için ayrı değişken
let autoSlideInterval = null;
const slideDelay = 3000; // 3 saniye

const fetchProduct = async (id) => {
  try {
    pending.value = true;
    error.value = null;
    product.value = await $fetch(`/api/product/${id}`);
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }
};

// Slider geçişleri
const nextImage = () => {
  if (!product.value?.imgProductDetail?.length) return;
  selectedImage.value = (selectedImage.value + 1) % product.value.imgProductDetail.length;
};

const prevImage = () => {
  if (!product.value?.imgProductDetail?.length) return;
  selectedImage.value = (selectedImage.value - 1 + product.value.imgProductDetail.length) % product.value.imgProductDetail.length;
};

// Otomatik slider başlat / resetle
const startAutoSlide = () => {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    nextImage();
  }, slideDelay);
};

// Manuel geçişlerde auto-slide reset
const manualNext = () => {
  nextImage();
  startAutoSlide();
};

const manualPrev = () => {
  prevImage();
  startAutoSlide();
};

// Lightbox aç / seçilen görsele git
const openLightbox = (idx) => {
  lightboxImage.value = product.value.imgProductDetail[idx]; // sabit resim
  lightboxActive.value = true;
};

// Otomatik slider
onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
});

watchEffect(() => {
  const id = route.params.id;
  if (id) fetchProduct(id);
});
</script>
