import React from 'react'
import { InputPrtext } from './api'
import ReactTagInput from '@pathofdev/react-tag-input'
import '@pathofdev/react-tag-input/build/index.css'

function TagTextInput({
  defaultValue,
  onChange,
  placeholder,
  readOnly,
  disabled,
}: InputPrtext) {
  const [tags, setTags] = React.useState(
    (defaultValue as string)?.length
      ? (defaultValue as string)
          .replace(/^"|"$/g, '')
          .split('","')
          .map(i => i.replace(/\\"/g, '"'))
      : []
  )

  function handleChange(newTags:any) {
    setTags(newTags)
    onChange?.(newTags.map((i:any) => `"` + i.replace(`"`, `\\"`) + `"`).join(`,`))
  }

  return (
    <div className="text-input-outer">
      <ReactTagInput
        tags={tags}
        onChange={newTags => handleChange(newTags)}
        editable={!disabled}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  )
}

export default TagTextInput
