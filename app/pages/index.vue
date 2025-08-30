<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen gap-6 overflow-hidden">
    <!-- Arkaplan -->
    <div class="absolute inset-0 bg-gradient-animate"></div>

    <!-- İçerik -->
    <img
      src="/img/karvise-logo.png"
      alt="Kullanıcı"
      class="relative z-10 rounded-3xl shadow-lg w-[90%] md:w-[30%] object-cover transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
    />
    <div class="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
      <index-card
        bg="/img/index_menu_1.jpg"
        subtitle="HİZMETLER"
        title="Dış Ticaret Danışmanlığı"
        buttonText="Detayları Gör"
        class="w-[90%] sm:w-80"
        @select="select('themeB')"
      />
      <index-card
        bg="/img/index_menu_2.jpg"
        subtitle="KATALOG"
        title="Export Product Catalog"
        buttonText="Kategorilere Git"
        class="w-[90%] sm:w-80"
        @select="select('themeA')"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})

const router = useRouter()

function select(theme) {
  localStorage.setItem('siteTheme', theme)
  if (theme === 'themeA') {
    router.push('/export-catalog/export-catalog')
  } else {
    router.push('/dis-ticaret/dis-ticaret')
  }
}
</script>

<style scoped>
/* Hareketli Gradient - Beyaza yakın tonlar */
.bg-gradient-animate {
  background: linear-gradient(
    -45deg, 
    #ffffff,       /* saf beyaz */
    #cacaca,       /* çok açık gri */
    #ace5ff,       /* pastel mavi */
    #e9d5b7        /* pastel krem / açık turuncu */
  );
  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
