import React, { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import { InputPrtext } from './api'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

function DefaultTextInput({
  maxLength,
  clearAll,
  validate,
  type,
  className,
  copy,
  onChange,
  onClearAll,
  ...rest
}: InputPrtext) {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [confirmation, setConfirmation] = useState(false)
  const [value, setValue] = useState(rest.defaultValue || rest.value)

  // Update value state whenerver value prtext change
  useEffect(() => {
    setValue(rest.value)
  }, [rest.value])

  // Hide the tooltip after clicking on copy icon in 2.5s
  useEffect(() => {
    let timerId: NodeJS.Timeout

    if (confirmation) {
      timerId = setTimeout(() => {
        setConfirmation(false)
      }, 2500)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [confirmation])

  function clear() {
    if (inputRef.current) {
      inputRef.current.value = ''
      onChange?.('')
      setValue('')
      onClearAll?.()
    }
  }

  function renderLengthMessage() {
    if (maxLength) {
      return value ? (
        <span className="counter body-3 test-grey-800">
          {`${String(value).length} / ${maxLength}`}
        </span>
      ) : null
    }

    return null
  }

  function renderClearButton() {
    if (clearAll && value) {
      return (
        <Button
          variant="icon"
          type="button"
          onClick={clear}
          className="textinput-action-button"
        >
          <i className="icon-close inputIcon" />
        </Button>
      )
    }
    return null
  }

  function renderHelperText() {
    if (validate) {
      return validate === 'error' ? (
        <i className="icon-error-circle text-lg validateIcon text-text-red" />
      ) : (
        <i className="icon-check text-lg validateIcon text-text-green" />
      )
    }

    return null
  }

  function renderCopyText() {
    if (copy && value) {
      return (
        <>
          {confirmation ? (
            <span className="textinput-action-button body-2 text-text-green pr-1">
              {t('icon.copied')}
            </span>
          ) : (
            <Button
              variant="icon"
              type="button"
              onClick={copyTextFromInput}
              className="textinput-action-button"
            >
              <i className="icon-copy text-lg inputIcon" />{' '}
            </Button>
          )}
        </>
      )
    }

    return null
  }

  function copyTextFromInput() {
    if (inputRef.current) {
      inputRef.current.select()
      document.execCommand('copy')
      setConfirmation(true)
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    onChange?.(value, event)
    setValue(value)
  }

  return (
    <div className="text-input-inner">
      <input
        {...rest}
        ref={inputRef}
        type={type ?? 'text'}
        className={clsx(
          className,
          { 'pr-6': clearAll },
          { 'text-input-error': validate === 'error' }
        )}
        onChange={handleChange}
      />

      {renderLengthMessage()}
      {renderClearButton()}
      {renderHelperText()}
      {renderCopyText()}
    </div>
  )
}

export default DefaultTextInput
