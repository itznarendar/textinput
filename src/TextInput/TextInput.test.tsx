import * as React from 'react'
import renderer from 'react-test-renderer'
import TextInput from './index'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}))

test('Text Input with max length', () => {
  const component = renderer
    .create(
      <TextInput
        type="text"
        id="b279e1b0-1d51-11ea-b576-0b857b03a511"
        label="Text Input with max length"
        placeholder="Enter text here"
        maxLength={10}
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Required Text Input', () => {
  const component = renderer
    .create(
      <TextInput
        type="text"
        id="e20ea460-1d24-11ea-b576-0b857b03a511"
        label="Required Text Input"
        placeholder="Enter text here"
        required
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Password input with pattern validation', () => {
  const component = renderer
    .create(
      <TextInput
        type="password"
        id="7e60c050-2d8d-11ea-beb5-b512248c9f49"
        label="Password Input"
        placeholder="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Number Input in increments of 5', () => {
  const component = renderer
    .create(
      <TextInput
        type="number"
        id="c4eec400-1d51-11ea-b576-0b857b03a511"
        label="Number Input in increments of 5"
        placeholder="Enter a number here"
        step="5"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Number Input in increments of 5', () => {
  const component = renderer
    .create(
      <TextInput
        type="number"
        id="c4eec400-1d51-11ea-b576-0b857b03a511"
        label="Number Input in increments of 5"
        placeholder="Enter a number here"
        step="5"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Number Input with min and max', () => {
  const component = renderer
    .create(
      <TextInput
        type="number"
        id="da77eb30-1d51-11ea-b576-0b857b03a511"
        label="Number Input with min and max"
        placeholder="Enter a number between 1 and 10"
        min="1"
        max="10"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Email Input', () => {
  const component = renderer
    .create(
      <TextInput
        type="email"
        id="76487d00-1d51-11ea-b576-0b857b03a511"
        label="Email Input"
        placeholder="Enter email here"
        required
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Telephone Input', () => {
  const component = renderer
    .create(
      <TextInput
        type="tel"
        id="f12ea070-1d52-11ea-b576-0b857b03a511"
        label="Mobile Number"
        placeholder="Enter phone number here in xxx-xxx-xxxx format"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Date Input', () => {
  const component = renderer
    .create(
      <TextInput
        type="date"
        id="7c874de0-1d51-11ea-b576-0b857b03a511"
        label="Date Input"
        placeholder="Enter date here"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('Time Input', () => {
  const component = renderer
    .create(
      <TextInput
        type="time"
        id="9690bb20-1d53-11ea-b576-0b857b03a511"
        label="Time Input"
        placeholder="Enter time here"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('clean all button', async () => {
  const component = renderer
    .create(
      <TextInput
        type="time"
        id="9690bb20-1d53-11ea-b576-0b857b03a511"
        label="Time Input"
        placeholder="Enter time here"
        clearAll={true}
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('validate in the input', async () => {
  const component = renderer
    .create(
      <TextInput
        type="time"
        id="9690bb20-1d53-11ea-b576-0b857b03a511"
        label="Time Input"
        placeholder="Enter time here"
        validate={'error'}
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})

test('validate in the input', async () => {
  const component = renderer
    .create(
      <TextInput
        type="time"
        id="9690bb20-1d53-11ea-b576-0b857b03a511"
        label="Time Input"
        placeholder="Enter time here"
        validate="ok"
      />
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})
