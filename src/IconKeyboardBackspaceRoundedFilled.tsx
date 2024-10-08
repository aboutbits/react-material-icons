import React from 'react'
import { IconProps } from './types'

const IconKeyboardBackspaceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m272-440 116 116q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L272-520h528q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H272Z" />
  </svg>
)

export { IconKeyboardBackspaceRoundedFilled as default }
