import React, { useCallback, useReducer } from 'react'
import DefaultTextInput from './DefaultTextInput'
import { IpAddress, InputPrtext } from './api'

const reducer = <T extends object>(
  previousState: T = {} as T,
  updatedState: Partial<T> = {}
): T => {
  return { ...previousState, ...updatedState }
}
export const useSetState = <T extends object>(
  initialState: T = {} as T
): [T, (updatedState: Partial<T>) => void] => {
  const [state, dispatch] = useReducer<React.Reducer<T, Partial<T>>>(
    reducer,
    initialState
  )

  const setState = useCallback((updatedState: Partial<T>) => {
    dispatch(updatedState)
  }, [])
  return [state, setState]
}
function IpTextInput({ defaultValue, onChange }: InputPrtext) {
  const [ip, setIp] = useSetState<IpAddress>(
    getInitialIp(defaultValue as string)
  )

  // Ip valid value: [0, 255]
  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { value } = event.target
    let validValue = value

    if (Number.parseInt(value) > 255) {
      validValue = '255'
    } else if (Number.parseInt(value) < 0) {
      validValue = '0'
    }

    if (validValue !== value) {
      onChange?.(getIp({ ...ip, [event.target.name]: validValue }))
      setIp({ [event.target.name]: validValue })
    }
  }

  function handleSubIpChange(
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) {
    if (event) {
      onChange?.(getIp({ ...ip, [event.target.name]: value }))
      setIp({ [event.target.name]: value })
    }
  }

  function getDefaultPrtext(name: keyof IpAddress) {
    return {
      type: 'number',
      name,
      min: 0,
      max: 255,
      value: ip[name],
      onChange: handleSubIpChange,
      onBlur: handleBlur,
      className: 'border-0 text-center text',
    }
  }

  const classes = 'w-1/4 inline-block position-relative dot'

  return (
    <div className="text-input-outer">
      <div className={classes}>
        <DefaultTextInput {...getDefaultPrtext('first')} />
      </div>
      <div className={classes}>
        <DefaultTextInput {...getDefaultPrtext('second')} />
      </div>
      <div className={classes}>
        <DefaultTextInput {...getDefaultPrtext('third')} />
      </div>
      <div className="w-1/4 inline-block">
        <DefaultTextInput {...getDefaultPrtext('fourth')} />
      </div>
    </div>
  )
}

function getInitialIp(defaultValue: string) {
  const [first, second, third, fourth] =
    defaultValue?.split('.') ?? '...'.split('.')

  return { first, second, third, fourth }
}

function getIp(ip: IpAddress) {
  return ip.first || ip.second || ip.third || ip.fourth
    ? `${ip.first}.${ip.second}.${ip.third}.${ip.fourth}`
    : ''
}

export default IpTextInput
