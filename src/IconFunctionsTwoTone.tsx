import React from 'react'
import { IconProps } from './types'

const IconFunctionsTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z" />
  </svg>
)

export { IconFunctionsTwoTone as default }
