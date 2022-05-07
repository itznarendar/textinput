import React from 'react'
import clsx from 'clsx'
import DefaultTextInput from './DefaultTextInput'
import IpTextInput from './IpTextInput'
import { InputPrtext, LabelPrtext } from './api'
import TagTextInput from './TagTextInput'

const TextInput: React.FC<InputPrtext> = ({
  type,
  label,
  clearAll,
  validate,
  maxLength,
  className,
  children,
  errors,
  ref,
  ...rest
}: InputPrtext) => {
  const { id } = rest
  const defaultInputPrtext = { clearAll, validate, maxLength, ref }
  const labelPrtext = { label, inputId: id, validate, required: rest.required }
  const contentClass = clsx('whitespace-nowrap', 'text-text-input-content')

  return (
    <div className={clsx('text-text-input body-2', className)} tabIndex={-1}>
      <div className="flex flex-row justify-between">
        {label ? <Label {...labelPrtext} /> : null}
        {children ? <div className={contentClass}>{children}</div> : null}
      </div>
      {type === 'ip' ? (
        <IpTextInput {...rest} />
      ) : type === 'tag' ? (
        <TagTextInput {...rest} />
      ) : (
        <DefaultTextInput {...rest} {...defaultInputPrtext} type={type} />
      )}
      {errors && <div className="body-3 text-text-red pt-1">{errors}</div>}
    </div>
  )
}

function Label({ label, inputId, validate, required }: LabelPrtext) {
  return (
    <label
      id={inputId ? `${inputId}-label` : undefined}
      htmlFor={inputId}
      className={clsx(
        { 'text-label-required': required },
        {
          'label-error': validate === 'error',
        },
        'body-3',
        'text-text-input-label'
      )}
    >
      {label}
    </label>
  )
}

export default TextInput
