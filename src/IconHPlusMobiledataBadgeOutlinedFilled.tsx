import React from 'react'
import { IconProps } from './types.js'

export const IconHPlusMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm60-160h80v-160h160v160h80v-400h-80v160H260v-160h-80v400Zm440-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
)
