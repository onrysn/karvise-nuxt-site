<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">

        <!-- Hero Section -->
        <header class="relative bg-green-700 text-white py-24 px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Pazarınızı Keşfedin – Doğru Müşteriye Doğru Stratejiyle Ulaşın
            </h1>
            <p class="max-w-2xl mx-auto text-lg md:text-xl mb-6">
                Dış ticarette başarı, doğru pazar ve doğru hedef müşteriyle başlar. Karvise olarak veri odaklı analizler
                ve kendi geliştirdiğimiz yazılım çözümleriyle en kârlı ve sürdürülebilir fırsatları önünüze seriyoruz.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:info@karvise.com"
                    class="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
                    📩 Pazar Keşfi Talep Et
                </a>
                <NuxtLink to="/iletisim"
                    class="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-green-700 transition">
                    İletişime Geç
                </NuxtLink>
            </div>
        </header>

        <!-- Niçin Pazar Araştırması Şart? -->
        <section class="py-20 px-6 max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Niçin Pazar Araştırması Şart?
            </h2>
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <h3 class="text-xl font-semibold mb-2">Veri Temelli Kararlar</h3>
                    <p class="text-gray-600">Gerçek verilerle talep, fiyat ve rekabeti ölçerek riskleri azaltır,
                        kârlılığı artırırız.</p>
                </div>
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <h3 class="text-xl font-semibold mb-2">Doğru Ülke & Segment</h3>
                    <p class="text-gray-600">Mevzuat, dağıtım kanalları ve alıcı profiline göre en uygun pazarları
                        belirleriz.</p>
                </div>
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <h3 class="text-xl font-semibold mb-2">Net Hedef Müşteri</h3>
                    <p class="text-gray-600">İdeal alıcıyı tanımlayıp odaklı aksiyonlarla satışa giden yolu kısaltırız.
                    </p>
                </div>
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <h3 class="text-xl font-semibold mb-2">Hızlı Sonuç</h3>
                    <p class="text-gray-600">Deneme-yanılmayı azaltır, ölç–öğren–iyileştir döngüsüyle hızlı ilerleriz.
                    </p>
                </div>
            </div>
        </section>

        <!-- 3 Adımda Pazar Keşfi -->
        <section class="py-20 px-6 bg-gray-50">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">3 Adımda Pazar Keşfi</h2>
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <div
                        class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                        1</div>
                    <h3 class="text-xl font-semibold mb-2">Analiz</h3>
                    <p class="text-gray-600">Ürün, hedef ve kapasitenize göre ön değerlendirme ve fırsat hipotezleri
                        oluştururuz.</p>
                </div>
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <div
                        class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                        2</div>
                    <h3 class="text-xl font-semibold mb-2">Raporlama</h3>
                    <p class="text-gray-600">Pazar büyüklüğü, rekabet, müşteri profili, GTİP ve fiyat aralıklarını
                        içeren rapor sunarız.</p>
                </div>
                <div class="bg-white rounded-2xl shadow p-6 text-center">
                    <div
                        class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                        3</div>
                    <h3 class="text-xl font-semibold mb-2">Yol Haritası</h3>
                    <p class="text-gray-600">Pazara giriş stratejisi, teklif/kanal planı ve ilk 90 gün aksiyonlarını
                        belirleriz.</p>
                </div>
            </div>
        </section>

        <!-- Yazılım Destekli Pazar Keşfi -->
        <section class="py-20 px-6 max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Yazılım Destekli Pazar Keşfi</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(software, index) in softwares" :key="index"
                    class="bg-white rounded-2xl shadow p-6 text-center flex flex-col justify-between">
                    <h3 class="text-xl font-semibold mb-2">{{ software.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ software.description }}</p>
                    <span v-if="software.status" class="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm mb-2">{{
                        software.status }}</span>
                </div>
            </div>
        </section>

        <!-- Sık Sorulan Sorular -->
        <section class="py-20 px-6 bg-gray-50 max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Sık Sorulan Sorular</h2>

            <div class="space-y-4">
                <div v-for="(question, index) in questions" :key="index"
                    class="bg-white rounded-xl shadow p-4 cursor-pointer w-full md:w-96 mx-auto" @click="toggle(index)">
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900">{{ question.question }}</h3>
                        <svg :class="{ 'rotate-180': question.open }"
                            class="w-5 h-5 text-green-600 transform transition-transform duration-300" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </div>

                    <!-- Dinamik yükseklik animasyonu -->
                    <transition name="accordion">
                        <p v-if="question.open" class="mt-2 text-gray-600">
                            {{ question.answer }}
                        </p>
                    </transition>
                </div>
            </div>
        </section>

        <!-- CTA Footer -->
        <section class="py-20 bg-green-700 text-white text-center px-6">
            <h2 class="text-4xl font-bold mb-6">Pazarınızı bugün keşfedelim</h2>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:info@karvise.com?subject=Pazar Keşfi Talebi"
                    class="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
                    📩 Pazar Keşfi Talep Et
                </a>
                <NuxtLink to="/iletisim"
                    class="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-green-700 transition">
                    İletişime Geç
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
import { softwares } from '~/assets/js/softwares';
import { questions } from '~/assets/js/sss';

function toggle(index) {
    questions[index].open = !questions[index].open;
}
</script>
<style>
.accordion-enter-active,
.accordion-leave-active {
    transition: all 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 200px;
    /* ihtiyaca göre */
    opacity: 1;
}
</style>
