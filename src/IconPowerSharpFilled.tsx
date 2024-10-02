import React from 'react'
import { IconProps } from './types'

export const IconPowerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-120v-120L240-380v-300h80v-160h80v160h160v-160h80v160h80v300L580-240v120H380Z" />
  </svg>
)
