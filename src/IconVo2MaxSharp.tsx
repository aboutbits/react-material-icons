import React from 'react'
import { IconProps } from './types'

const IconVo2MaxSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-419l280-221v-120h80v120l280 220v140h-80v-99l-120-96v475h-80v-538l-40-32-40 32 2 538H40Zm80-80h122l-2-395-120 96v299Zm400 80v-240h180v240H520Zm60-60h60v-120h-60v120ZM740-80v-150h120v-30H740v-60h180v150H800v30h120v60H740ZM181-438Zm359 0Z" />
  </svg>
)

export { IconVo2MaxSharp as default }
