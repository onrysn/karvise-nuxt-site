<template>
    <div class="max-w-7xl mx-auto p-6">
        <h1 class="text-4xl font-extrabold mb-8 text-center text-gray-900">Ürünler</h1>

        <!-- Arama -->
        <div class="mb-6 flex justify-center">
            <input v-model="searchQuery" placeholder="Ürün Ara..."
                class="border border-gray-300 rounded-full px-6 py-3 w-full md:w-1/2 shadow-md focus:ring-4 focus:ring-blue-200 focus:outline-none transition duration-300 hover:shadow-lg" />
        </div>

        <!-- Kategori Filtreleme -->
        <div class="mb-4 flex justify-center flex-wrap gap-4">
            <span v-for="cat in categories" :key="cat.id" @click="toggleCategory(cat.name)" :class="[
                'cursor-pointer px-5 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg',
                selectedCategories.includes(cat.name)
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white border-transparent'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-300 hover:text-white'
            ]">
                {{ cat.name }}
            </span>
        </div>

        <!-- Alt Kategori Filtreleme -->
        <div class="mb-6 flex justify-center flex-wrap gap-4">
            <span v-for="sub in subCategories" :key="sub.id" @click="toggleSubCategory(sub.name)" :class="[
                'cursor-pointer px-5 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg',
                selectedSubCategories.includes(sub.name)
                    ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white border-transparent'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-teal-300 hover:text-white'
            ]">
                {{ sub.name }}
            </span>
        </div>

        <!-- Ürün Listesi -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in products" :key="product.subtitle"
                class="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-1 hover:scale-102">
                <img :src="product.img || '/img/products/coming-soon.jpg'" alt="Product Image"
                    class="w-full h-48 object-cover" />
                <div class="p-4 flex flex-col flex-1">
                    <h2 class="text-xl font-bold mb-1 text-gray-800">{{ product.title }}</h2>
                    <h3 class="text-sm text-gray-500 mb-2">{{ product.subtitle }}</h3>
                    <p class="text-gray-700 mb-4 flex-1">{{ product.description || 'Açıklama yok' }}</p>
                    <div class="flex justify-between items-center mt-auto gap-2">
                        <span class="text-blue-600 font-semibold">{{ product.price || 'Fiyat Belirtilmemiş' }}</span>

                        <div class="flex gap-2">
                            <!-- <button @click="deleteProduct(product.subtitle)"
                                class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200">
                                Sil
                            </button> -->

                            <!-- WhatsApp Butonu -->
                            <a :href="`https://wa.me/905073675004?text=Merhaba, ${encodeURIComponent(product.title)} hakkında bilgi almak istiyorum.`"
                                target="_blank"
                                class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition duration-200 flex items-center gap-2">
                                📱 WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const products = ref([]);
const categories = ref([]);
const subCategories = ref([]);

const searchQuery = ref('');
const selectedCategories = ref([]);
const selectedSubCategories = ref([]);

const fetchCategories = async () => {
    categories.value = await $fetch('/api/categories');
};

const fetchSubCategories = async (categoryNames = []) => {
    if (!categoryNames.length) {
        subCategories.value = [];
        return;
    }
    subCategories.value = await $fetch(`/api/subCategories?category=${categoryNames[0]}`);
};

const fetchProducts = async () => {
    const params = new URLSearchParams();
    if (selectedCategories.value.length) params.append('category', selectedCategories.value[0]);
    if (selectedSubCategories.value.length) params.append('subCategory', selectedSubCategories.value[0]);
    if (searchQuery.value) params.append('search', searchQuery.value.trim());
    products.value = await $fetch(`/api/products?${params.toString()}`);
};

const toggleCategory = async (name) => {
    if (selectedCategories.value.includes(name)) {
        // Kategori iptal edildiğinde
        selectedCategories.value = [];
        selectedSubCategories.value = []; // alt kategorileri de sıfırla
        subCategories.value = [];         // alt kategori baloncuklarını temizle
    } else {
        // Yeni kategori seçildiğinde
        selectedCategories.value = [name];
        await fetchSubCategories([name]);
    }
    await fetchProducts();
};


const toggleSubCategory = async (name) => {
    if (selectedSubCategories.value.includes(name)) {
        selectedSubCategories.value = selectedSubCategories.value.filter(c => c !== name);
    } else {
        selectedSubCategories.value = [name];
    }
    await fetchProducts();
};

const deleteProduct = async (subtitle) => {
    await $fetch('/api/products', {
        method: 'DELETE',
        body: { subtitle }
    });
    await fetchProducts();
};

await fetchCategories();
await fetchProducts();
watch(searchQuery, fetchProducts);
</script>
