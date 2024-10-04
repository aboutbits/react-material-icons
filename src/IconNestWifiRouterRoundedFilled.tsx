import React from 'react'
import { IconProps } from './types.js'

export const IconNestWifiRouterRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120q-77 0-138.5-44T134-280h692q-26 72-87.5 116T600-120H360ZM120-360v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240H120Z" />
  </svg>
)
