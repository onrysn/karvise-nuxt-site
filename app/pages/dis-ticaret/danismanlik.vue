<template>
    <div class="flex flex-col min-h-screen">
        <!-- Hero Section -->
        <section class="relative w-full py-20 bg-green-700 rounded-4xl">
            <div class="container mx-auto px-6 text-left max-w-8xl">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
                    Dış Ticaret Danışmanlığı – Uluslararası Arenada Güçlü Bir Adım
                </h1>
                <p class="text-lg md:text-xl text-white leading-relaxed">
                    Dış ticaretin karmaşık süreçlerinde yanında bir danışman olması firmalar için büyük avantaj sağlar.
                    Biz de Karvise olarak; ithalat, ihracat, gümrük, yasal yükümlülükler, pazara giriş stratejileri ve
                    daha fazlasını kapsayan titizlikle tasarlanmış dış ticaret danışmanlığı hizmetlerimizle
                    yanınızdayız.
                    Süreçlerinizi sadeleştirmek, riskleri minimize etmek ve uluslararası pazarda sizi bir adım öne
                    çıkarmak için buradayız.
                </p>
            </div>
        </section>

        <section class="py-20  bg-gray-50">
            <div class="container mx-auto px-6">
                <!-- Başlık -->
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Dış ticaret danışmanlığı ve yazılım çözümlerimizle işinizi uluslararası arenada güçlendiriyoruz.
                    </p>
                </div>

                <!-- Hizmetler Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(service, index) in services" :key="index"
                        class="bg-gray-50 rounded-xl shadow p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
                        <p class="text-gray-600 mb-3">{{ service.description }}</p>

                        <!-- Durum -->
                        <div v-if="service.status === 'active'">
                            <span class="text-green-600 font-medium">✅ Aktif</span>
                        </div>
                        <div v-else class="flex justify-between items-center">
                            <span class="text-yellow-600 font-medium">⏳ Yakında</span>
                            <div class="mt-3">
                                <a href="mailto:info@karvise.com"
                                    class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    📩 Ön Talep Bırak
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <!-- Başlık -->
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Neden <span class="text-green-600">Karvise</span> ile Çalışmalısınız?
                    </h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        Tecrübe + teknoloji + yazılım: dış ticaret hedeflerinize birlikte, ölçülebilir adımlarla
                        ulaşıyoruz.
                    </p>
                </div>

                <!-- Card Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(reason, index) in reasonsForKarvise" :key="index"
                        class="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
                        <h3 class="text-xl font-semibold mb-3">{{ reason.title }}</h3>
                        <p class="text-gray-600 flex-1">{{ reason.description }}</p>
                    </div>
                </div>

                <!-- CTA Butonları -->
                <div class="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                    <a href="mailto:info@karvise.com"
                        class="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">
                        Hızlı Görüşme Planla
                    </a>
                    <NuxtLink to="/dis-ticaret/egitimler"
                        class="px-6 py-3 bg-white text-green-700 rounded-xl shadow-lg hover:bg-gray-200 transition">
                        Eğitimleri İncele
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-6xl">
                <!-- Başlık -->
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Süreç Aşamalarımız</h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        Dış ticaret süreçlerinde izlediğimiz adımlar sayesinde firmalarımızı başarıya ulaştırıyoruz.
                    </p>
                </div>

                <!-- Card Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(stage, index) in processStages" :key="index"
                        class="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition relative">
                        <!-- Numara -->
                        <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <div
                                class="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg">
                                {{ index + 1 }}
                            </div>
                        </div>

                        <!-- İçerik -->
                        <div class="mt-8 text-center">
                            <h3 class="text-2xl font-semibold mb-3">{{ stage.title }}</h3>
                            <p class="text-gray-600">{{ stage.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20 bg-green-700 text-white">
            <div class="container mx-auto px-6 text-center max-w-3xl">
                <h2 class="text-4xl font-bold mb-6">Genç Fikirlerle Tecrübeyi Harmanlıyoruz</h2>
                <p class="text-lg mb-8 leading-relaxed">
                    Karvise olarak, yenilikçi fikirleri yılların tecrübesiyle birleştirerek
                    işletmenizi global pazarlarda başarıya taşıyoruz. Şimdi ilk adımı atın!
                </p>
                <a href="mailto:info@karvise.com"
                    class="inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
                    İlk Adımı Atın
                </a>
            </div>
        </section>
    </div>
</template>

<script setup>
const { data: services } = await useAsyncData('services', () => $fetch('/api/services'))
const { data: reasonsForKarvise } = await useAsyncData('reasonsForKarvise', () => $fetch('/api/reasonsForKarvise'))
const { data: processStages } = await useAsyncData('processStages', () => $fetch('/api/processStages'))
</script>