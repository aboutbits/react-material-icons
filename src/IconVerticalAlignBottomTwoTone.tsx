import React from 'react'
import { IconProps } from './types'

const IconVerticalAlignBottomTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z" />
  </svg>
)

export { IconVerticalAlignBottomTwoTone as default }
