<template>
    <div>
        <!-- Hero -->
        <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center relative overflow-hidden">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                Our Services
            </h1>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Connecting global importers with vetted manufacturers across Türkiye — safely, transparently, and
                cost-effectively.
            </p>
        </section>

        <!-- Services List -->
        <section class="max-w-7xl mx-auto px-6 py-16">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="service in services" :key="service.id"
                    class="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center text-center">
                    <!-- Icon -->
                    <div class="bg-blue-100 p-5 rounded-full mb-4 flex items-center justify-center">
                        <i :class="['fas', service.icon, 'text-blue-600 text-3xl']"></i>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-blue-600 mb-2">
                        {{ service.title }}
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-700 mb-4">
                        {{ service.description }}
                    </p>

                    <!-- Features -->
                    <ul class="text-blue-600 space-y-2 list-disc list-inside mb-4 text-left w-full">
                        <li v-for="(feature, idx) in service.features" :key="idx">
                            {{ feature }}
                        </li>
                    </ul>

                    <!-- Sector Badges -->
                    <div v-if="service.sectorBadges && service.sectorBadges.length"
                        class="flex flex-wrap gap-2 justify-center mt-2">
                        <span v-for="(badge, idx) in service.sectorBadges" :key="idx"
                            class="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            {{ badge }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-r from-green-100 to-green-200 py-20 text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
                Secure Your Supply Process
            </h2>
            <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Experience safe, transparent and advantageous sourcing from Türkiye with Karvise.
            </p>
            <!-- <NuxtLink to="/contact"
                class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
                Request a Quote
            </NuxtLink> -->
        </section>
    </div>
</template>

<script setup>
const { data: services } = await useFetch('/api/exportServices', {
    transform: (res) => {
        return res.map((service) => ({
            ...service,
            features: service.features || [],
            sectorBadges: service.sectorBadges || []
        }))
    }
})
</script>
