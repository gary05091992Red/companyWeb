<script setup>
import { useContactModal } from '../composables/useContactModal'

const { open } = useContactModal()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="/logo.svg" alt="星和 Logo" class="footer-logo" />
        <p>以創新驅動進步，以品質贏得信賴</p>
      </div>

      <div class="footer-links">
        <a href="#about">關於我們</a>
        <a href="#intro">公司介紹</a>
        <a href="#products">產品服務</a>
        <button type="button" class="footer-contact-btn" @click="open">聯絡我們</button>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} 星和. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #1a2b3c;
  color: rgba(255, 255, 255, 0.7);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px;
}

.footer-logo {
  height: 36px;
  margin-bottom: 12px;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.footer-brand p {
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.footer-links a,
.footer-contact-btn {
  font-size: 14px;
  transition: color 0.2s;
}

.footer-links a:hover,
.footer-contact-btn:hover {
  color: #fff;
}

.footer-contact-btn {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  text-align: center;
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px 24px;
  }
}
</style>
