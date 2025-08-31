<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <header class="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/img/dis-ticaret-bg.jpg')">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/55"></div>

      <!-- Content -->
      <div class="relative z-10 text-center text-white max-w-3xl px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Genç Fikirlerle Tecrübeyi Harmanlıyoruz
        </h1>
        <p class="mb-6 text-lg md:text-xl">
          Karvise olarak, yenilikçi fikirleri ve yılların dış ticaret tecrübesini
          birleştirerek, işletmenizi global pazarlarda başarıya taşıyoruz.
          Stratejik danışmanlık ve özel yazılım çözümlerimizle hedeflerinizi
          aşmanıza yardımcı oluyoruz.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:info@karvise.com"
            class="px-6 py-3 bg-white text-black rounded-xl shadow-lg hover:bg-gray-200 transition">
            İlk Adımı Atın
          </a>
          <NuxtLink to="/dis-ticaret/danismanlik"
            class="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">
            Daha Fazlası
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Uygulama Görseli + Açıklama -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <!-- Görsel -->
        <img src="/img/apps-bg-black.png" alt="Karvise Uygulamalar"
          class="mx-auto rounded-2xl shadow-lg mb-8 max-w-4xl hover:bg-gray-200 transition" />

        <!-- Başlık + Açıklama -->
        <h2 class="text-4xl font-bold mb-4">Ne Yapıyoruz</h2>
        <p class="text-gray-600 max-w-xl mx-auto mb-12">
          Karvise ile firmanızı dünyaya açın! Dış ticaret danışmanlığı,
          ihracata hazırlık eğitimleri, pazar araştırması ve müşteri bulma
          hizmetlerimizle global pazarlarda yerinizi alın. Özel yazılım
          çözümlerimizle süreçlerinizi hızlandırın, verimliliğinizi artırın.
        </p>

        <!-- 3 Card -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-green-700 rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h3 class="text-6xl text-white font-semibold mb-3 text-left">Dış Ticaret Danışmanlığı</h3>
            <p class="text-gray-600 text-white mb-8 mt-8 text-left">
              Küresel pazarlara açılmanız için stratejik planlama, müşteri bulma ve süreç yönetimi desteği.
            </p>
            <NuxtLink to="/dis-ticaret/danismanlik"
              class="inline-block px-4 py-2 bg-white rounded-lg hover:bg-gray-200 transition">
              Detayları Gör
            </NuxtLink>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h3 class="text-6xl font-semibold mb-3">Pazar Araştırma ve Müşteri Bulma</h3>
            <p class="text-gray-600 m-4">
              Hedef pazarlarda potansiyel müşterilerinizi tespit ediyor, iletişim stratejinizi oluşturuyoruz.
            </p>
            <NuxtLink to="/dis-ticaret/yazilim"
              class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Keşfet
            </NuxtLink>
          </div>

          <!-- Card 3 -->
          <div class="bg-green-700 rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h3 class="text-6xl text-white font-semibold mb-3 text-right">İhracata Hazırlık ve Eğitim</h3>
            <p class="text-gray-600 text-white mb-8 mt-8 text-right">
              Ekibinizi dış ticaret süreçleri, müşteri iletişimi ve pazarlama konularında eğitiyoruz.
            </p>
            <NuxtLink to="/dis-ticaret/egitim"
              class="inline-block px-4 py-2 bg-white rounded-lg hover:bg-gray-200 transition">
              Daha Fazla
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
