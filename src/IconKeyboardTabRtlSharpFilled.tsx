import React from 'react'
import { IconProps } from './types'

const IconKeyboardTabRtlSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240H80v-480h80v480Zm320 0L240-480l240-240 56 56-143 144h487v80H393l144 144-57 56Z" />
  </svg>
)

export { IconKeyboardTabRtlSharpFilled as default }
