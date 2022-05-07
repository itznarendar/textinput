import * as React from 'react'
import clsx from 'clsx'
import { forwardRef } from 'react'

export interface ButtonPrtext {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  /** choose a variant */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'text'
    | 'primarytext'
    | 'secondarytext'
    | 'tertiarytext'
    | 'cancel'
    | 'icon'
  disabled?: boolean
  className?: string
  onClick?: (event?: React.MouseEvent) => void
}

const Button: any = forwardRef(
  (
    {
      type = 'button',
      variant = 'primary',
      disabled = false,
      className,
      children,
      onClick,
      ...prtext
    }: ButtonPrtext,
    ref
  ) => {
    const VARIANT: { [index: string]: string } = {
      primary: 'text-button-primary',
      secondary: 'text-button-secondary',
      tertiary: 'text-button-tertiary',
      text: 'text-button-text',
      primarytext: 'text-button-text',
      secondarytext: 'text-button-secondarytext',
      tertiarytext: 'text-button-tertiarytext',
      cancel: 'text-button-cancel',
      icon: 'text-button-icon',
    }
    return (
      <button
        className={clsx(
          'text-button btn',
          { 'text-button-disabled': disabled },
          VARIANT[variant],
          className
        )}
        type={type}
       // lib="test"
        disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? undefined : onClick}
        //ref={ref}
        {...prtext}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
export default Button
