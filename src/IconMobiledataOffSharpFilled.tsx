import React from 'react'
import { IconProps } from './types'

export const IconMobiledataOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 400-448v174l62-62 58 56-160 160-160-160 58-56 62 62v-254L56-792l56-56 736 736-56 56ZM640-434l-80-80v-174l-64 64-56-56 160-160 160 160-56 56-64-64v254Z" />
  </svg>
)
