export type InputPrtext = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  label?: React.ReactNode
  /** css class for wrapper, add `text-text-input-with-state` for showing status with input control */
  className?: string
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void

  /**
   * validate if the input text has error or not
   */
  validate?: 'ok' | 'error'

  /**
   * show close button to clear all the text inside input
   */
  clearAll?: boolean
  /**
   * Callback when clearall is clicked
   */
  onClearAll?: Function
  ref?: React.Ref<HTMLInputElement>
  /**
   * show copy button to copy the text inside input
   */
  copy?: boolean
  /**
   * show help text for input field
   */
  children?: React.ReactNode

  errors?: React.ReactNode
}

export type LabelPrtext = {
  label: React.ReactNode
  inputId?: string
  required?: boolean
  validate?: InputPrtext['validate']
}

export type IpAddress = {
  first: string
  second: string
  third: string
  fourth: string
}
