import React from 'react'
import { IconProps } from './types'

const IconStopOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 8v8H8V8h8m2-2H6v12h12V6z" />
  </svg>
)

export { IconStopOutlined as default }
