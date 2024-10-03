import React from 'react'
import { IconProps } from './types.js'

export const IconVo2MaxSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-160v-240h180v240H520Zm60-60h60v-120h-60v120ZM740-80v-150h120v-30H740v-60h180v150H800v30h120v60H740ZM40-160v-419l280-221v-120h80v120l280 220v140H480v280h-80v-538l-40-32-40 32 2 538H40Z" />
  </svg>
)
