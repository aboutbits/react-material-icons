import React from 'react'
import { IconProps } from './types.js'

export const IconAvcSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-360h60v-60h60v60h60v-240H180v240Zm60-120v-60h60v60h-60Zm210 120h60l70-240h-60l-40 137-40-137h-60l70 240Zm150 0h180v-80h-60v20h-60v-120h60v20h60v-80H600v240ZM40-160v-640h880v640H40Z" />
  </svg>
)
