<template>
    <div class="min-h-screen bg-gray-50 py-16 px-6">
        <!-- Başlık -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Yazılım Çözümlerimiz</h1>
            <p class="text-gray-600 max-w-2xl mx-auto">
                “Karvise yazılım çözümleri ile işletmenizi dijital olarak güçlendirin. Müşteri bulma, pazar araştırması
                ve operasyon yönetimi süreçlerinizi tek bir platform üzerinden hızlı, güvenli ve verimli şekilde
                yönetin.”
            </p>
        </div>

        <!-- Yazılım Cardları -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            <div v-for="(software, index) in softwares" :key="index"
                class="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col justify-between">
                <!-- Logo -->
                <div class="flex justify-center mb-4">
                    <img v-if="software.logo" :src="software.logo" alt="" class="h-20 w-auto object-contain" />
                </div>

                <!-- Başlık -->
                <h3 class="text-2xl font-semibold text-gray-900 mb-2 text-center">{{ software.title }}</h3>

                <!-- Alt Başlık / Açıklama -->
                <p class="text-gray-600 mb-4 text-center">{{ software.description }}</p>

                <!-- Made By -->
                <p class="text-sm text-gray-400 mb-4 text-center">Made by Karvise</p>

                <!-- Etiket ve Buton -->
                <div class="flex justify-center items-center gap-3">
                    <span v-if="software.status" class="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">{{
                        software.status }}</span>
                    <NuxtLink :to="software.link"
                        class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center">
                        Daha Fazla Bilgi Al
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
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
</template>

<script setup>
import { softwares } from '~/assets/js/softwares';
</script>
