<template>
    <div class="min-h-screen bg-gray-50 py-16 px-6">
        <!-- Başlık -->
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Eğitimlerimiz</h1>
            <p class="text-gray-600 max-w-2xl mx-auto">
                PDF formatında ihracat ve ticaret eğitimleri, online destek ile hızlı öğrenme ve uygulama imkânı.
            </p>
        </div>

        <!-- Eğitim Cardları -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            <div v-for="(course, index) in courses" :key="index"
                class="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col justify-between">
                <!-- Görsel -->
                <img v-if="course.img" :src="course.img" alt="" class="rounded-xl mb-4 object-cover h-40 w-full" />

                <!-- Başlık -->
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ course.title }}</h3>

                <!-- Alt Başlık -->
                <h4 class="text-green-600 font-medium mb-3">{{ course.subtitle }}</h4>

                <!-- Açıklama -->
                <p class="text-gray-600 flex-1">{{ course.description }}</p>

                <!-- Daha Fazla / Link Butonu -->
                 <!--<a v-if="course.link" :href="course.link" target="_blank"
                    class="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition text-center">
                    Daha Fazla
                </a>-->
                
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
const { data: courses } = await useAsyncData('courses', () => $fetch('/api/courses'))
</script>
