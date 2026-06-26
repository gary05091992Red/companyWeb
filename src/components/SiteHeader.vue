<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '../composables/useContactModal'

const { open: openContact } = useContactModal()

const navItems = [
  { label: '關於我們', href: '#about' },
  { label: '公司介紹', href: '#intro' },
  { label: '產品服務', href: '#products' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)
const baseUrl = import.meta.env.BASE_URL

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

function closeMobile() {
  mobileOpen.value = false
}

function openContactModal() {
  closeMobile()
  openContact()
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="header-top">
      <div class="container header-top-inner">
        <button type="button" class="contact-link" @click="openContactModal">聯絡我們</button>
      </div>
    </div>

    <div class="header-main">
      <div class="container header-main-inner">
        <a href="#" class="logo" @click.prevent>
          <!-- 將 public/logo.svg 替換為您的 logo 圖片即可 -->
          <img :src="`${baseUrl}logo.svg`" alt="星和 Logo" />
        </a>

        <nav class="nav-desktop">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="header-actions">
          <button class="icon-btn" aria-label="搜尋">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
          </button>
          <button class="icon-btn" aria-label="語言">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" />
            </svg>
          </button>
          <button
            class="menu-toggle"
            :class="{ open: mobileOpen }"
            aria-label="選單"
            @click="mobileOpen = !mobileOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <nav class="nav-mobile" :class="{ open: mobileOpen }">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="nav-link"
        @click="closeMobile"
      >
        {{ item.label }}
      </a>
      <button type="button" class="nav-link nav-link-btn" @click="openContactModal">
        聯絡我們
      </button>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.header-main {
  background: #fff;
}

.site-header.scrolled {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.header-top {
  border-bottom: 1px solid var(--border);
}

.header-top-inner {
  display: flex;
  justify-content: flex-end;
  padding: 6px 24px;
}

.contact-link {
  font-size: 13px;
  color: var(--text-light);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s;
}

.contact-link:hover {
  color: var(--primary);
}

.header-main-inner {
  display: flex;
  align-items: center;
  height: var(--header-height);
  gap: 32px;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-desktop {
  display: flex;
  gap: 36px;
  margin-left: auto;
}

.nav-link {
  font-size: 15px;
  color: var(--text-dark);
  letter-spacing: 1px;
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: none;
  color: var(--text);
  border-radius: 4px;
  transition: background 0.2s;
}

.icon-btn:hover {
  background: var(--bg-gray);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 36px;
  height: 36px;
  border: none;
  background: none;
  padding: 6px;
  justify-content: center;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 2.5px;
  background: #1a1a1a;
  border-radius: 1px;
  transition: transform 0.3s, opacity 0.3s, background 0.3s;
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid var(--border);
  padding: 16px 24px;
  gap: 16px;
}

.nav-mobile.open {
  display: flex;
}

.nav-link-btn {
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
}

@media (max-width: 768px) {
  .header-top {
    display: none;
  }

  .nav-desktop {
    display: none;
  }

  .icon-btn {
    display: none;
  }

  .header-main-inner {
    position: relative;
    justify-content: flex-start;
    width: 100%;
  }

  .header-actions {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
  }

  .menu-toggle {
    display: flex;
    width: 44px;
    height: 44px;
    padding: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
  }

  .menu-toggle span {
    width: 24px;
    height: 3px;
    background: #1a1a1a;
  }

  .menu-toggle.open span {
    background: #1a1a1a;
  }
}
</style>
