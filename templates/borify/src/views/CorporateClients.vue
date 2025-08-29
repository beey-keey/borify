<!-- ServicesGrid.vue -->
<template>
  <section class="relative">
    <!-- optional header -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <header class="text-center mb-10">
        <p class="text-sky-400 font-extrabold tracking-wide">
          КОРПОРАТИВНИ КЛИЕНТИ
        </p>
        <h2 class="mt-2 text-3xl md:text-4xl font-black text-slate-900">
          В нашe лице клиентите срещат доверен партньор
        </h2>
      </header>

      <!-- cards grid -->
      <div
        class="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="item in items"
          :key="item.id"
          class="group relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-200 p-6 md:p-7 hover:-translate-y-1 transition-transform"
        >
          <!-- top accent line -->
          <span
            class="absolute inset-x-0 -top-px h-1 rounded-t-2xl bg-slate-100"
          ></span>

          <!-- icon -->
          <div
            class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200"
            v-html="item.icon"
          />
          <!-- title -->
          <h3 class="text-xl font-extrabold text-slate-900 leading-snug">
            {{ item.title }}
          </h3>
          <!-- excerpt -->
          <p class="mt-2 text-slate-600 leading-relaxed">
            {{ item.excerpt }}
          </p>

          <!-- arrow link -->
          <router-link
            :to="item.href"
            class="mt-4 inline-flex items-center gap-2 text-slate-900 font-semibold"
          >
            <span class="opacity-60 group-hover:opacity-100 transition-opacity"
              >Повече</span
            >
            <span
              class="inline-grid h-7 w-7 place-items-center rounded-full bg-slate-100 group-hover:bg-slate-900 text-slate-900 group-hover:text-white transition-colors"
              aria-hidden="true"
            >
              →
            </span>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// You can also pass these as a prop; here is inline demo data:
const items = [
  {
    id: 1,
    title: "Дружствено и корпоративно право",
    excerpt:
      "Регистрация на търговски дружества, съдружия и фондации. Сливания и придобивания, прехвърляне на дялове и акции, преводи и легализация.",
    href: "/services/corporate",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h4v18M13 21V9h4a2 2 0 0 1 2 2v10" />
      </svg>`,
  },
  {
    id: 2,
    title: "Трудово право, счетоводство и ТРЗ",
    excerpt:
      "Трудови договори, вътрешни правила, разрешения за работа, преструктуриране и реорганизация на служители.",
    href: "/services/employment",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M12 2v6m-6 6h12M6 10h12m-9 8h6" />
      </svg>`,
  },
  {
    id: 3,
    title: "Договорно право и търговски сделки",
    excerpt:
      "Изготвяне и преговори по договори, due diligence, уреждане на търговски спорове, медиация.",
    href: "/services/contracts",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M8 2h8l4 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M14 2v6h6" />
      </svg>`,
  },
  {
    id: 4,
    title: "Недвижими имоти и устройство на територията",
    excerpt:
      "Правен анализ, сделки с имоти, устройствено планиране, строителни договори и спорове.",
    href: "/services/real-estate",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M3 11l9-7 9 7" />
        <path d="M9 22V12h6v10" />
      </svg>`,
  },
  {
    id: 5,
    title: "Енергетика",
    excerpt:
      "Консултации при проекти в енергийния сектор, регулации, договори и съответствие.",
    href: "/services/energy",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>`,
  },
  {
    id: 6,
    title: "Нормативни съответствия и регулации",
    excerpt:
      "Оценка на съответствие, вътрешни политики, обучение, защита на лични данни и киберсигурност.",
    href: "/services/compliance",
    icon: `
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>`,
  },
];
</script>
