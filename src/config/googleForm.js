import formConfig from './googleForm.config.js'

export const googleFormConfig = formConfig

export function isGoogleFormConfigured() {
  const { actionUrl, entries } = googleFormConfig
  return Boolean(
    actionUrl
    && entries.name
    && entries.phone
    && entries.email
    && entries.company,
  )
}
