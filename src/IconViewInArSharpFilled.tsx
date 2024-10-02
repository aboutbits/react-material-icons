import React from 'react'
import { IconProps } from './types'

export const IconViewInArSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-158 200-319v-322l280-161 280 161v322L480-158ZM80-680v-200h200v80H160v120H80ZM280-80H80v-200h80v120h120v80Zm400 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80Zm-478 61-42 24v45l160 93v184l40 23 40-23v-184l160-93v-45l-42-24-158 93-158-93Z" />
  </svg>
)
