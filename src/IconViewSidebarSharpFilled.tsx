import React from 'react'
import { IconProps } from './types'

export const IconViewSidebarSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-640v-160h160v160H720Zm0 240v-160h160v160H720ZM80-160v-640h560v640H80Zm640 0v-160h160v160H720Z" />
  </svg>
)
