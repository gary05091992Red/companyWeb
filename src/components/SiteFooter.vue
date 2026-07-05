<script setup>
import { useContactModal } from '../composables/useContactModal'

const { open } = useContactModal()
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img :src="`${baseUrl}星和LOGO.png`" alt="星和機電有限公司 Logo" class="footer-logo" />
        <p>快速應變、專業施工、品質第一、安全至上</p>
      </div>

      <div class="footer-links">
        <a href="#home">首頁</a>
        <a href="#about">關於我們</a>
        <a href="#products">產品服務</a>
        <button type="button" class="footer-contact-btn" @click="open">聯絡我們</button>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} 星和機電有限公司. All Rights Reserved.</p>
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
  height: 44px;
  margin-bottom: 12px;
  opacity: 0.95;
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
