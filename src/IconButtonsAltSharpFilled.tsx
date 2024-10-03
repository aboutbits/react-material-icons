import React from 'react'
import { IconProps } from './types.js'

export const IconButtonsAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480h800v480H80Zm210-120h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z" />
  </svg>
)
