<!-- IndividualClients.vue -->
<template>
  <section class="relative">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <!-- Section label + headline -->
      <header class="text-center mb-10 md:mb-14">
        <div
          class="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-200/30 text-sky-400"
        >
          <!-- simple logo mark -->
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <circle cx="8" cy="12" r="4" />
            <path d="M14 8a4 4 0 1 1 0 8z" />
          </svg>
        </div>
        <p class="text-sky-400 font-extrabold tracking-wide">ФИЗИЧЕСКИ ЛИЦА</p>
        <h2 class="mt-3 text-3xl md:text-4xl font-black text-slate-900">
          Поставяме на първо място личното отношение.
        </h2>
      </header>

      <!-- Cards -->
      <div
        class="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="item in items"
          :key="item.id"
          class="group relative rounded-2xl bg-[#222839] text-slate-200 border border-white/10 p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-transform"
        >
          <!-- icon -->
          <div
            class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-sky-300"
            v-html="item.icon"
          />
          <!-- title -->
          <h3 class="text-xl font-extrabold text-white leading-snug">
            {{ item.title }}
          </h3>
          <!-- text -->
          <p class="mt-2 text-slate-300/90 leading-relaxed">
            {{ item.excerpt }}
          </p>

          <!-- arrow -->
          <router-link
            :to="item.href"
            class="mt-5 inline-flex items-center gap-2 text-sky-300 font-semibold"
          >
            <span class="opacity-80 group-hover:opacity-100 transition-opacity"
              >Повече</span
            >
            <span
              class="inline-grid h-7 w-7 place-items-center rounded-full bg-white/10 group-hover:bg-sky-400 text-sky-300 group-hover:text-[#222839] transition-colors"
              aria-hidden="true"
              >→</span
            >
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
    title: "Семейно и наследствено право",
    excerpt:
      "Консултации при семейни или имуществено-правни отношения, защита на съществени по дела за издръжка, бащинство и наследство. Съдействие при защита от домашно насилие.",
    href: "/individual/family",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path stroke="currentColor" d="M12 21s7-4.35 7-10a4 4 0 0 0-7-2 4 4 0 0 0-7 2c0 5.65 7 10 7 10z"/>
      </svg>`,
  },
  {
    id: 2,
    title: "Трудово право",
    excerpt:
      "Изготвяне на трудови договори, защита по дела за незаконно уволнение, неизплатени възнаграждения, обезщетения и трудови злополуки.",
    href: "/individual/employment",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M3 7h18M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"/>
      </svg>`,
  },
  {
    id: 3,
    title: "Застрахователно право",
    excerpt:
      "Съдействие при избор и сключване на застрахователни договори, предявяване на претенции, преговори и представителство при щети.",
    href: "/individual/insurance",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M12 2l7 3v6c0 5-3.5 9-7 10C8.5 20 5 16 5 11V5l7-3z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>`,
  },
  {
    id: 4,
    title: "Административно право",
    excerpt:
      "Обжалване на административни актове, защита на лични данни (GDPR), процедури пред държавни органи.",
    href: "/individual/administrative",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M3 10h18M6 10V7l6-4 6 4v3M6 22h12V10H6z"/>
      </svg>`,
  },
  {
    id: 5,
    title: "Вещно право",
    excerpt:
      "Проверка на собственост, сделки с имоти, наеми, ипотеки и защита на собствеността.",
    href: "/individual/property",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M3 11l9-7 9 7"/>
        <path d="M9 22V12h6v10"/>
      </svg>`,
  },
  {
    id: 6,
    title: "Други услуги за физически лица",
    excerpt:
      "Изготвяне на договори, пълномощни, съдействие при наследствени дела, потребителски спорове и др.",
    href: "/individual/other",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <circle cx="12" cy="7" r="3"/><path d="M5.5 22a6.5 6.5 0 0 1 13 0"/>
      </svg>`,
  },
];
</script>
