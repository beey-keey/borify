<template></template>

<script setup lang="ts">
import router from "@/router/router";
import { ref } from "vue";
const baseUrl = import.meta.env.BASE_URL;

const cards = [
  {
    title: "💡 Основна идея и концепция",
    description:
      "Споделяне на личен опит със здравословен режим, без да се дава медицински съвет.",
    image: "/banner.png",
  },
  {
    title: "🌱 Каква е целта на сайта?",
    description: "Да вдъхновя други хора чрез моя опит.",
    image: "/banner2.png",
  },
  {
    title: "🤸🏻‍♀️ За кого е този сайт?",
    description:
      "За хора, които търсят баланс, вдъхновение и реален пример – не диета.",
    image: "/banner3.png",
  },
  {
    title: "‼️ Какво НЕ е този сайт?",
    description:
      "Това не е медицински блог или диетичен план. Всичко е личен пример.",
    image: "/banner4.png",
  },
  {
    title: "🤩 Какво ще намериш тук?",
    description:
      "Моите дневници, рецепти, хранителни схеми, трикове за баланс и вдъхновение.",
    image: "/banner5.png",
  },
];

const openPrinciples = () => {
  router.push("/principles");
};

function generateLeafStyle(index: number) {
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = 0.3 * index;
  const size = 40 + Math.random() * 30;

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    animationDelay: `${delay}s`,
    transform: "rotate(0deg)",
  };
}
</script>

<style scoped>
.home-view {
  animation: fade-in 0.6s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out both;
}

@keyframes bg-fade {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-bg-fade {
  animation: bg-fade 10s ease-in-out infinite;
}
</style>
