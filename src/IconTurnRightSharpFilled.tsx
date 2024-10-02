import React from 'react'
import { IconProps } from './types'

export const IconTurnRightSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160v-440h408l-64-64 56-56 160 160-160 160-56-56 64-64H360v360h-80Z" />
  </svg>
)
