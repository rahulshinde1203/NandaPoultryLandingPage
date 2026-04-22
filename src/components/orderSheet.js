// Paste your Google Apps Script Web App URL here after setup
export const SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzADpLTJFpiHbrW7xn1o6iKZz7v-tEtQetSZzwxza1v6bd84KDXUMCMUtowjtOgKSDqlA/exec'

export function saveToSheet(data) {
  if (!SHEET_WEBHOOK_URL) return
  const url = `${SHEET_WEBHOOK_URL}?${new URLSearchParams(data)}`
  fetch(url, { method: 'GET', mode: 'no-cors' }).catch(() => {})
}
