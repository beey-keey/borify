<template>
  <div class="min-h-screen bg-gradient-to-br to-emerald-100 text-gray-800">
    <header class="top-bar">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <!-- Logo & Title -->
        <!-- <div class="flex items-center space-x-3">
          <img src="/favicon.png" alt="Law firm Logo" class="h-8 w-8" />
          <h1 class="font-brand text-2xl text-emerald-600">Law firm</h1>
        </div> -->

        <!-- Desktop Nav -->
        <nav class="hidden md:flex" style="margin-right: 50px">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="menu-item"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <button class="button">Контакти</button>

        <!-- MOBILE VIEW -->

        <!-- Mobile button -->
        <button
          class="text-green-700 focus:outline-none md:hidden"
          @click="showMenu = !showMenu"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="showMenu"
        class="space-y-2 px-6 pb-4 text-lg font-semibold md:hidden"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block"
          :class="
            $route.path === link.path
              ? 'text-emerald-600 underline'
              : 'text-green-800'
          "
          @click="showMenu = false"
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- MOBILE VIEW END -->
    </header>

    <!-- Full-width hero image -->
    <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <img
        src="/law-firm.webp"
        alt="Law Firm"
        class="w-full h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] object-cover"
      />
    </div>

    <div
      class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-105"
    >
      <HeroCard />
    </div>

    <div
      class="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-cover bg-center"
      style="background-image: url(&quot;/1.png&quot;)"
    >
      <!-- Dark overlay for better text contrast -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Content area -->
      <div class="relative z-10 py-16 md:py-24">
        <div class="max-w-6xl mx-auto px-4 md:px-6">
          <CorporateClients />
        </div>
      </div>
    </div>

    <div
      class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-64"
    ></div>

    <div
      class="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-cover bg-center"
      style="background-image: url(&quot;/2.png&quot;)"
    >
      <!-- Dark overlay for better text contrast -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Content area -->
      <div class="relative z-10 py-16 md:py-24">
        <div class="max-w-6xl mx-auto px-4 md:px-6">
          <IndividualClients />
        </div>
      </div>
    </div>

    <main class="p-6">
      <!-- <LoginScreen v-if="$route.path === '/login'" /> -->
      <router-view />
      <footer class="mt-10 text-center text-sm text-gray-600">
        <!-- <p>&copy; 2025 Law firm.</p> -->
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeroCard from "./views/HeroCard.vue";
import CorporateClients from "./views/CorporateClients.vue";
import IndividualClients from "./views/IndividualClients.vue";

const showMenu = ref(false);

const navLinks = [
  { path: "/about", label: "За нас" },
  { path: "/services", label: "Услуги" },
  { path: "/", label: "Екип" },
  { path: "/contact", label: "Статии" },
  { path: "/contact", label: "Проекти" },
  { path: "/contact", label: "Партньори" },
];

const activeTab = ref("home");
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap");

.font-brand {
  font-family: "Cormorant Garamond", serif;
}
</style>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
