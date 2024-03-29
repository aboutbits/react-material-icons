import React from 'react'
import { IconProps } from './types'

const IconStopTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 8h8v8H8z" opacity=".3" />
    <path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
  </svg>
)

export { IconStopTwoTone as default }
