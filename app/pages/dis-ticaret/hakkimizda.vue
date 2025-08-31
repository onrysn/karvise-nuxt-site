<template>
    <div class="min-h-screen bg-gray-50">

        <!-- Hero Section -->
        <section class="bg-green-700 text-white py-20 px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
            <p class="text-lg md:text-xl max-w-3xl mx-auto">
                Karvise Dış Ticaret Danışmanlık olarak, firmaların uluslararası pazarlara açılmasını kolaylaştırıyor,
                ihracat süreçlerinde güvenilir bir yol arkadaşı oluyoruz. Amacımız; işletmenizi Avrupa başta olmak üzere
                dünyanın farklı bölgelerinde rekabetçi, sürdürülebilir ve kârlı bir şekilde konumlandırmaktır.
            </p>
        </section>

        <!-- Danışmanlık Hizmetleri -->
        <section class="py-20 px-6 max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Danışmanlık Hizmetlerimiz</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
                    <h3 class="text-xl font-semibold mb-2">Dış Ticaret Stratejisi Geliştirme</h3>
                    <p class="text-gray-600">
                        Firmanızın mevcut potansiyelini analiz ederek, global pazarlara açılacak stratejik planı
                        oluşturuyoruz.
                    </p>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
                    <h3 class="text-xl font-semibold mb-2">Müşteri Bulma ve Pazarlama</h3>
                    <p class="text-gray-600">
                        Sektörünüze uygun potansiyel alıcıları buluyor, satış ekibinizi müşteri bulma ve iletişim
                        teknikleri konusunda eğitiyoruz.
                    </p>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
                    <h3 class="text-xl font-semibold mb-2">Üretim ve Süreç Takibi</h3>
                    <p class="text-gray-600">
                        Tedarik zincirinizin her adımında kalite ve zaman yönetimini sağlıyoruz.
                    </p>
                </div>
            </div>
        </section>

        <!-- Yazılım Çözümlerimiz -->
        <section class="py-20 bg-gray-100 px-6">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Özel Yazılım Çözümlerimiz</h2>
                <p class="text-gray-700">
                    Karvise, danışmanlık hizmetlerine ek olarak, kendi geliştirdiğimiz yazılım çözümleri ile işletmenizi
                    dijital ortamda güçlendirir.
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition text-center">
                    <h3 class="text-xl font-semibold mb-2">ReachSuite</h3>
                    <p class="text-gray-600 mb-4">
                        Global pazarlarda potansiyel müşterilerinizi hızlı ve verimli şekilde tespit eder.
                    </p>
                    <span class="block text-gray-400 mb-2">Made by Karvise</span>
                    <NuxtLink to="/yazilim/reachsuite"
                        class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        Daha Fazla Bilgi Al
                    </NuxtLink>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition text-center">
                    <h3 class="text-xl font-semibold mb-2">ERP Uygulaması</h3>
                    <p class="text-gray-600 mb-4">
                        Siparişten teslimata kadar üretim sürecinizi adım adım kontrol edin.
                    </p>
                    <span class="block text-gray-400 mb-2">Made by Karvise</span>
                    <NuxtLink to="/yazilim/erp"
                        class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        Daha Fazla Bilgi Al
                    </NuxtLink>
                </div>
                <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition text-center">
                    <h3 class="text-xl font-semibold mb-2">ReachSuite CRM</h3>
                    <p class="text-gray-600 mb-4">
                        Müşteri ilişkilerinizi ve satış ağınızı kolayca yönetin.
                    </p>
                    <span class="block text-gray-400 mb-2">Made by Karvise</span>
                    <NuxtLink to="/yazilim/crm"
                        class="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        Daha Fazla Bilgi Al
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Neden Karvise -->
        <section class="py-20 px-6 max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Neden Karvise?</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-green-50 p-6 rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Uluslararası Pazarlara Hızlı Giriş</h3>
                    <p class="text-gray-600">Sektörünüze uygun stratejilerle global pazarlara güvenle adım atın.</p>
                </div>
                <div class="bg-green-50 p-6 rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Sürdürülebilir Büyüme</h3>
                    <p class="text-gray-600">Profesyonel rehberlik ve teknoloji desteği ile kalıcı başarı elde edin.</p>
                </div>
                <div class="bg-green-50 p-6 rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Eğitim ve Teknoloji</h3>
                    <p class="text-gray-600">Yenilikçi çözümler, eğitim ve yazılımlar ile işletmenizi güçlendirin.</p>
                </div>
            </div>
        </section>

        <!-- Vizyon ve Misyon -->
        <section class="py-20 bg-gray-100 px-6">
            <div class="max-w-4xl mx-auto text-center space-y-12">
                <div>
                    <h3 class="text-2xl font-bold mb-2">Vizyonumuz</h3>
                    <p class="text-gray-700">
                        Türkiye’deki firmaları dünya pazarında rekabetçi, sürdürülebilir ve güçlü bir konuma taşıyan
                        öncü dış ticaret danışmanlık markası olmak.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl font-bold mb-2">Misyonumuz</h3>
                    <p class="text-gray-700">
                        Müşterilerimize uluslararası pazarlara açılma sürecinde rehberlik etmek, potansiyel müşteriler
                        bulmalarını sağlamak ve ihracat yetkinliklerini artırmak. Kendi geliştirdiğimiz yazılımlarla
                        operasyonel verimlilik ve satış gücünü artırıyoruz.
                    </p>
                </div>
            </div>
        </section>

        <section class="py-20 px-6 max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Sizin İçin Ne Yapabiliriz?</h2>
            <p class="text-gray-700 mb-4">
                Karvise olarak, işletmenizi yerelden globale taşıyacak stratejik çözümler üretiyoruz. Amacımız, yalnızca
                danışmanlık vermek değil; sizi, markanızı ve ürünlerinizi uluslararası arenada kalıcı bir başarıya
                ulaştırmak.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-green-600 p-6 text-white rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Küresel Dış Ticaret Stratejileri</h3>
                    <p>Firmanızın güçlü yönlerini ortaya çıkarıyor, hedef pazarlara yönelik özel bir ihracat planı tasarlıyoruz. Her adımı, sürdürülebilir büyüme odaklı planlıyoruz.</p>
                </div>
                <div class="bg-green-600 p-6 text-white rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Hedef Müşteri Keşfi ve Satış Ağı Oluşturma</h3>
                    <p>Sektörünüze uygun, yüksek potansiyelli alıcıları tespit ediyor; ekibinizi, global müşteri ilişkileri ve satış teknikleri konusunda ileri düzeyde eğitiyoruz.</p>
                </div>
                <div class="bg-green-600 p-6 text-white rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Yenilikçi Yazılım Çözümleri</h3>
                    <p>Tamamen Karvise tarafından geliştirilen Müşteri Bulma ve Üretim Takip uygulamalarıyla işinizi dijital dünyada güçlendiriyor, size zamandan ve maliyetten tasarruf sağlıyoruz.</p>
                </div>
                <div class="bg-green-600 p-6 text-white rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Uluslararası Pazarlara Güvenli Adım</h3>
                    <p>Avrupa başta olmak üzere hedef pazarlarınıza giriş sürecinizi planlıyor, gümrük, lojistik, mevzuat ve müşteri ilişkilerinde yanınızda oluyoruz.</p>
                </div>
                <div class="bg-green-600 p-6 text-white rounded-2xl shadow-md">
                    <h3 class="font-semibold text-lg mb-2">Üretim ve Tedarik Süreci Mükemmelleştirme</h3>
                    <p>Siparişten teslimata kadar tüm üretim zincirinizi denetliyor, kalite standartlarınızı yükseltiyor ve teslim sürelerini optimize ediyoruz</p>
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
          class="inline-block mr-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
          İlk Adımı Atın
        </a>
        <a href="tel:+905073675004"
          class="inline-block ml-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
          Bizi Arayın
        </a>
      </div>
    </section>
    </div>
</template>
