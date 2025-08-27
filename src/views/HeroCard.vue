<!-- HeroCard.vue -->
<template>
  <section class="hero-card">
    <div class="brand">Лумбева &amp; Стоянова</div>

    <h1 class="title">
      С фокус върху клиента.<br />
      Водени от успеха
    </h1>

    <p class="lead">
      В 'Лумбева и Стоянова' знаем, че знанията и опитът са само първата стъпка.
      За да се направят следващите, са необходими разбиране, съобразителност и
      лично отношение. С нас можете уверено да изминете целия път до разрешаване
      на Вашия проблем.
    </p>

    <div class="actions">
      <a href="#" class="btn btn-primary">
        Юридически лица
        <span class="arrow"></span>
      </a>
      <a href="#" class="btn btn-secondary">
        Физически лица
        <span class="arrow"></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* ===== Theme (можеш да коригираш цветовете тук) ===== */
:root {
  --bg: #faf8f4; /* светъл фон */
  --text: #0f1220; /* почти черно */
  --muted: #18343a; /* тъмно зеленикав за абзаца */
  --brand: #93c5fd; /* синьо за логото */
  --primary: #111321; /* тъмен бутон */
  --primary-text: #eaf0ff;
  --secondary-bg: #efefef; /* светлосив бутон */
  --secondary-text: #111321;
  --shadow: 0 12px 24px rgba(17, 19, 33, 0.06);
}

/* ===== Layout ===== */
.hero-card {
  background: var(--bg);
  padding: clamp(24px, 4vw, 48px) clamp(16px, 5vw, 72px);
  border-radius: 16px;
  box-shadow: var(--shadow);
  color: var(--text);
  max-width: 1000px; /* за красива ширина */
}

/* ===== Brand (малък син текст горе) ===== */
.brand {
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--brand);
  font-size: clamp(14px, 1.6vw, 18px);
  margin-bottom: clamp(10px, 1.5vw, 16px);
}

/* ===== Title ===== */
.title {
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.01em;
  font-size: clamp(36px, 6.8vw, 72px); /* огромно, адаптивно */
  margin: 0 0 clamp(16px, 2vw, 24px);
}

/* ===== Lead paragraph ===== */
.lead {
  max-width: 58ch;
  color: var(--muted);
  font-size: clamp(16px, 1.6vw, 20px);
  line-height: 1.7;
  margin: 0 0 clamp(20px, 3vw, 32px);
}

/* ===== Buttons ===== */
.actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px 14px 18px;
  border-radius: 14px;
  font-weight: 700;
  font-size: clamp(15px, 1.6vw, 18px);
  text-decoration: none;
  transition:
    transform 0.12s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
  box-shadow: 0 6px 14px rgba(17, 19, 33, 0.06);
  will-change: transform;
}

.btn:hover {
  transform: translateY(-1px);
}
.btn:active {
  transform: translateY(0);
}

.btn-primary {
  background: var(--primary);
  color: var(--primary-text);
}

.btn-primary:hover {
  box-shadow: 0 10px 20px rgba(17, 19, 33, 0.14);
}

.btn-secondary {
  background: var(--secondary-bg);
  color: var(--secondary-text);
}

.btn-secondary:hover {
  background: #e8e8e8;
}

/* стрелка */
.arrow {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  display: inline-grid;
  place-items: center;
  position: relative;
}

.btn-secondary .arrow {
  background: rgba(17, 19, 33, 0.08);
}

.arrow::after {
  content: "→";
  font-size: 16px;
  line-height: 1;
  transform: translateY(-1px);
}

/* ===== Small screens tweaks ===== */
@media (max-width: 520px) {
  .hero-card {
    border-radius: 12px;
  }
  .actions {
    gap: 12px;
  }
}
</style>
