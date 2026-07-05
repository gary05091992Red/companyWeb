<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '../composables/useContactModal'
import { isGoogleFormConfigured } from '../config/googleForm'
import { submitToGoogleForm } from '../services/contactFormService'

const { isOpen, close } = useContactModal()
const baseUrl = import.meta.env.BASE_URL

const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  message: '',
})

const submitting = ref(false)
const submitError = ref('')
const submittedData = ref(null)

const contactItems = [
  { label: '電話', value: '+886-3-3756088', icon: 'phone' },
  { label: '傳真', value: '+886-3-3757086', icon: 'fax' },
  { label: '電子郵件', value: 'service@company.com.tw', icon: 'email' },
  { label: '地址', value: '台灣桃園市龜山區興邦路 31 號', icon: 'location' },
]

async function handleSubmit() {
  submitError.value = ''
  submitting.value = true

  const payload = { ...form.value }

  try {
    if (isGoogleFormConfigured()) {
      await submitToGoogleForm(payload)
    } else {
      throw new Error('Google 表單尚未設定，請編輯 src/config/googleForm.config.js')
    }

    submittedData.value = payload
    form.value = { name: '', phone: '', email: '', company: '', message: '' }
  } catch (error) {
    submitError.value = error.message
  } finally {
    submitting.value = false
  }
}

function resetForm() {
  submittedData.value = null
  submitError.value = ''
}

function onKeydown(e) {
  if (e.key === 'Escape' && isOpen.value) close()
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) {
    submittedData.value = null
    submitError.value = ''
  }
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
            <aside class="modal-info">
              <div class="info-logo">
                <img :src="`${baseUrl}logo.png`" alt="星和機電有限公司 Logo" />
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
            </aside>

            <div class="modal-form-wrap">
              <h2 id="contact-title" class="form-title">聯絡我們</h2>

              <div v-if="submittedData" class="success-panel">
                <div class="success-icon">✓</div>
                <h3>提交成功！</h3>
                <p class="success-desc">您的資料已寫入 Google 表單，我們將盡快與您聯繫。</p>

                <dl class="submitted-summary">
                  <div><dt>姓名</dt><dd>{{ submittedData.name }}</dd></div>
                  <div><dt>電話</dt><dd>{{ submittedData.phone }}</dd></div>
                  <div><dt>電子郵件</dt><dd>{{ submittedData.email }}</dd></div>
                  <div><dt>公司</dt><dd>{{ submittedData.company }}</dd></div>
                  <div v-if="submittedData.message"><dt>訊息</dt><dd>{{ submittedData.message }}</dd></div>
                </dl>

                <button type="button" class="submit-btn" @click="resetForm">再填一筆</button>
              </div>

              <form v-else class="contact-form" @submit.prevent="handleSubmit">
                <p v-if="submitError" class="error-msg">{{ submitError }}</p>
                <p v-if="!isGoogleFormConfigured()" class="warn-msg">
                  Google 表單尚未設定，請編輯 src/config/googleForm.config.js。
                </p>

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

                <button type="submit" class="submit-btn" :disabled="submitting">
                  {{ submitting ? '提交中...' : '提交' }}
                </button>
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

.modal-form-wrap {
  flex: 1;
  padding: 48px 40px 40px;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.form-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 32px;
  letter-spacing: 2px;
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

.submit-btn:hover:not(:disabled) {
  background: var(--primary-dark);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-msg {
  background: #ffebee;
  color: #c62828;
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
}

.warn-msg {
  background: #fff8e1;
  color: #f57f17;
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 13px;
  line-height: 1.6;
}

.success-panel {
  text-align: center;
  padding: 12px 0;
}

.success-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
}

.success-panel h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.success-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 24px;
}

.submitted-summary {
  text-align: left;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 24px;
}

.submitted-summary div {
  display: flex;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.submitted-summary div:last-child {
  border-bottom: none;
}

.submitted-summary dt {
  flex-shrink: 0;
  width: 72px;
  color: #888;
}

.submitted-summary dd {
  margin: 0;
  color: #333;
  word-break: break-word;
}

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
    padding: 0;
    align-items: flex-end;
  }

  .modal {
    border-radius: 20px 20px 0 0;
    max-height: 94dvh;
    overflow-y: auto;
  }

  .close-btn {
    top: 12px;
    right: 12px;
    background: #fff;
    box-shadow: var(--shadow-sm);
  }

  .modal-body {
    flex-direction: column;
    min-height: auto;
  }

  .modal-info {
    width: 100%;
    padding: 28px 20px 20px;
  }

  .info-logo {
    margin-bottom: 20px;
  }

  .info-logo img {
    height: 44px;
  }

  .info-item {
    gap: 12px;
    padding-bottom: 14px;
    margin-bottom: 14px;
  }

  .info-icon {
    width: 36px;
    height: 36px;
  }

  .info-icon svg {
    width: 16px;
    height: 16px;
  }

  .info-label {
    font-size: 12px;
  }

  .info-value {
    font-size: 13px;
    word-break: break-word;
  }

  .modal-form-wrap {
    padding: 24px 20px calc(24px + env(safe-area-inset-bottom));
  }

  .form-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-field {
    margin-bottom: 20px;
  }

  .submit-btn {
    width: 100%;
    align-self: stretch;
    text-align: center;
    padding: 14px 24px;
  }
}

@media (max-width: 480px) {
  .modal {
    border-radius: 16px 16px 0 0;
  }

  .info-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 12px;
  }

  .info-item {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: none;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }

  .info-item:nth-last-child(-n+2) {
    margin-bottom: 0;
  }
}
</style>
