export type AlertOption = {
  title?: string
  text?: string
  html?: string
  type?: 'success' | 'warning' | 'error'
  position?: 'top' | 'bottom'
  timer?: number
  isCancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
}
