<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '../composables/useContactModal'

const { isOpen, close } = useContactModal()

const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  message: '',
})

const submitted = ref(false)

const contactItems = [
  {
    label: '電話',
    value: '+886-3-3756088',
    icon: 'phone',
  },
  {
    label: '傳真',
    value: '+886-3-3757086',
    icon: 'fax',
  },
  {
    label: '電子郵件',
    value: 'service@company.com.tw',
    icon: 'email',
  },
  {
    label: '地址',
    value: '台灣桃園市龜山區興邦路 31 號',
    icon: 'location',
  },
]

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Youtube', href: '#' },
  { label: 'Linkedin', href: '#' },
]

function handleSubmit() {
  submitted.value = true
  form.value = { name: '', phone: '', email: '', company: '', message: '' }
  setTimeout(() => { submitted.value = false }, 4000)
}

function onKeydown(e) {
  if (e.key === 'Escape' && isOpen.value) close()
}

watch(isOpen, (open) => {
  if (!open) submitted.value = false
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <button class="close-btn" aria-label="關閉" @click="close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div class="modal-body">
            <!-- 左側聯絡資訊 -->
            <aside class="modal-info">
              <div class="info-logo">
                <img src="/logo.svg" alt="星和 Logo" />
              </div>

              <div class="info-list">
                <div v-for="item in contactItems" :key="item.label" class="info-item">
                  <div class="info-icon">
                    <svg v-if="item.icon === 'phone'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M6.5 3h3l1.5 5-2 1.5a11 11 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2C10.5 19 5 13.5 5 6.5a2 2 0 012-3.5z" />
                    </svg>
                    <svg v-else-if="item.icon === 'fax'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect x="4" y="6" width="16" height="12" rx="1" />
                      <path d="M8 10h8M8 14h5" />
                      <path d="M4 10V8a2 2 0 012-2h2" />
                    </svg>
                    <svg v-else-if="item.icon === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 21s-7-5.4-7-11a7 7 0 1114 0c0 5.6-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <div class="info-text">
                    <span class="info-label">{{ item.label }}</span>
                    <span class="info-value">{{ item.value }}</span>
                  </div>
                </div>
              </div>

              <div class="social">
                <a v-for="link in socialLinks" :key="link.label" :href="link.href" class="social-link">
                  <span v-if="link.label === 'Facebook'" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </span>
                  <span v-else-if="link.label === 'Youtube'" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-2.48-2.48C18.88 3.5 12 3.5 12 3.5s-6.88 0-8.06.44A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 002.48 2.48C5.12 20.5 12 20.5 12 20.5s6.88 0 8.06-.44a2.78 2.78 0 002.48-2.48A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                  </span>
                  <span v-else class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
                  </span>
                  {{ link.label }}
                </a>
              </div>
            </aside>

            <!-- 右側表單 -->
            <div class="modal-form-wrap">
              <h2 id="contact-title" class="form-title">聯絡我們</h2>

              <div v-if="submitted" class="success-msg">
                感謝您的來信，我們將盡快與您聯繫！
              </div>

              <form class="contact-form" @submit.prevent="handleSubmit">
                <div class="form-row">
                  <div class="form-field">
                    <label>姓名 <span class="required">*</span></label>
                    <input v-model="form.name" type="text" placeholder="請輸入您的全名" required />
                  </div>
                  <div class="form-field">
                    <label>電話 <span class="required">*</span></label>
                    <input v-model="form.phone" type="tel" placeholder="請輸入您的電話號碼" required />
                  </div>
                </div>

                <div class="form-field">
                  <label>電子郵件 <span class="required">*</span></label>
                  <input v-model="form.email" type="email" placeholder="請輸入您的電子郵件地址" required />
                </div>

                <div class="form-field">
                  <label>公司 <span class="required">*</span></label>
                  <input v-model="form.company" type="text" placeholder="請輸入您的公司名稱" required />
                </div>

                <div class="form-field">
                  <label>訊息</label>
                  <textarea v-model="form.message" rows="4" placeholder="請在此輸入您的訊息"></textarea>
                </div>

                <button type="submit" class="submit-btn">提交</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal {
  position: relative;
  width: 100%;
  max-width: 900px;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: background 0.2s, color 0.2s;
}

.close-btn:hover {
  background: #fff;
  color: #333;
}

.modal-body {
  display: flex;
  min-height: 520px;
}

/* 左側 */
.modal-info {
  width: 38%;
  background: #f0f2f5;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
}

.info-logo {
  text-align: center;
  margin-bottom: 36px;
}

.info-logo img {
  height: 56px;
  margin: 0 auto;
}

.info-list {
  flex: 1;
}

.info-item {
  display: flex;
  gap: 16px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #c8cdd3;
}

.info-item:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
}

.info-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border: 1.5px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.info-icon svg {
  width: 18px;
  height: 18px;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 2px;
}

.info-label {
  font-size: 13px;
  color: #666;
}

.info-value {
  font-size: 14px;
  color: #1a1a1a;
  line-height: 1.5;
}

.social {
  display: flex;
  gap: 20px;
  padding-top: 24px;
  margin-top: auto;
  border-top: 1px solid #c8cdd3;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #333;
  transition: color 0.2s;
}

.social-link:hover {
  color: var(--primary);
}

.social-icon {
  width: 18px;
  height: 18px;
  display: flex;
}

.social-icon svg {
  width: 100%;
  height: 100%;
}

/* 右側表單 */
.modal-form-wrap {
  flex: 1;
  padding: 48px 40px 40px;
  display: flex;
  flex-direction: column;
}

.form-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 32px;
  letter-spacing: 2px;
}

.success-msg {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 24px;
}

.form-field {
  margin-bottom: 24px;
}

.form-field label {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.required {
  color: #e53935;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  color: #333;
  transition: border-color 0.2s;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #aaa;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-bottom-color: var(--primary);
}

.form-field textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-btn {
  margin-top: auto;
  align-self: flex-start;
  padding: 10px 40px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  letter-spacing: 2px;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: var(--primary-dark);
}

/* 動畫 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.95) translateY(12px);
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 12px;
    align-items: flex-end;
  }

  .modal {
    border-radius: 20px 20px 0 0;
    max-height: 92vh;
    overflow-y: auto;
  }

  .modal-body {
    flex-direction: column;
    min-height: auto;
  }

  .modal-info {
    width: 100%;
    padding: 32px 24px 24px;
  }

  .info-logo {
    margin-bottom: 24px;
  }

  .social {
    flex-wrap: wrap;
    gap: 12px 20px;
  }

  .modal-form-wrap {
    padding: 32px 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
