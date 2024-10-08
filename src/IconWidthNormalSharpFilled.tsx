import React from 'react'
import { IconProps } from './types'

const IconWidthNormalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h160v-480H160v480Zm480 0h160v-480H640v480Z" />
  </svg>
)

export { IconWidthNormalSharpFilled as default }
