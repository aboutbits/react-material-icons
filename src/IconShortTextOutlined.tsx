import React from 'react'
import { IconProps } from './types'

const IconShortTextOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" />
  </svg>
)

export { IconShortTextOutlined as default }
