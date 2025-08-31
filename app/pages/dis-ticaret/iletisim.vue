<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- Karşılama Kartı -->
    <div class="relative bg-white rounded-3xl shadow-xl p-10 max-w-3xl mx-auto mt-12 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      <!-- Üst ikon -->
      <div class="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8c.132 0 .262.017.388.05a4.992 4.992 0 01.704-.8l.066-.066A4.992 4.992 0 0112 8zm0 0c.132 0 .262.017.388.05a4.992 4.992 0 01.704-.8l.066-.066A4.992 4.992 0 0112 8zM12 12v6m0 0l-2-2m2 2l2-2" />
        </svg>
      </div>

      <!-- Başlık -->
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-4">
        Karvise'la Tanışın
      </h2>

      <!-- Açıklama -->
      <p class="text-gray-600 text-center mb-6">
        Karvise, dış ticaret süreçlerinde ve teknoloji alanında pratik çözümler üreterek işletmelerin iş akışlarını güçlendirir.  
        Amacımız, doğru stratejiler ve etkili iş birlikleriyle projelerinizi hedef pazarlara ulaştırmaktır.
      </p>

      <!-- Butonlar -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+905073675004" class="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition text-center">
          Bizi Arayın
        </a>
        <a href="mailto:info@karvise.com" class="flex-1 px-6 py-3 bg-white text-green-600 border border-green-600 rounded-xl shadow hover:bg-green-50 transition text-center">
          Mail Gönder
        </a>
      </div>
    </div>

    <!-- Form ve Danışmanlık Kartı -->
    <section class="flex flex-col lg:flex-row gap-12 py-16 px-6 max-w-6xl mx-auto">

      <!-- İletişim Formu -->
      <div class="flex-1 bg-white rounded-3xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-900">Bize Mesaj Gönderin</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <input v-model="form.name" type="text" placeholder="İsminiz" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" required />
          <input v-model="form.company" type="text" placeholder="Şirketiniz" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
          <input v-model="form.email" type="email" placeholder="Email" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" required />
          <input v-model="form.subject" type="text" placeholder="Konu" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
          <textarea v-model="form.message" placeholder="Mesajınız" rows="5" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" required></textarea>
          <button type="submit" class="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold">
            Gönder
          </button>
        </form>
      </div>

      <!-- Danışmanlık / Bilgi Kartı -->
      <div class="flex-1 flex flex-col gap-6">
        <div class="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition">
          <h3 class="text-2xl font-semibold mb-4 text-gray-900">Danışmanlığa mı ihtiyacınız var?</h3>
          <p class="text-gray-600 mb-6">
            Dış ticaret süreçleriniz, pazar araştırmalarınız veya iş geliştirme planlarınızla ilgili desteğe mi ihtiyacınız var?  
            Karvise ekibi olarak size en doğru çözümü sunmak için buradayız.
          </p>
          <a href="tel:+905073675004" class="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition text-center">
            Bizi Arayın
          </a>
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
import { reactive } from 'vue'

const form = reactive({
  name: '',
  company: '',
  email: '',
  subject: '',
  message: ''
})

function submitForm() {
  console.log('Form gönderildi:', form)
  alert('Mesajınız gönderildi! Teşekkürler.')
  form.name = ''
  form.company = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>
