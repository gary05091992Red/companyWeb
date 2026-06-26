import { googleFormConfig, isGoogleFormConfigured } from '../config/googleForm'

export async function submitToGoogleForm(data) {
  if (!isGoogleFormConfigured()) {
    throw new Error('Google 表單尚未設定，請編輯 src/config/googleForm.config.js')
  }

  const { actionUrl, entries } = googleFormConfig
  const formData = new FormData()
  formData.append(entries.name, data.name)
  formData.append(entries.phone, data.phone)
  formData.append(entries.email, data.email)
  formData.append(entries.company, data.company)
  if (entries.message && data.message) {
    formData.append(entries.message, data.message)
  }

  await fetch(actionUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  })

  return { success: true }
}
