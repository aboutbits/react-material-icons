import React from 'react'
import { IconProps } from './types'

const IconOdsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360h160v-240H200v240Zm60-60v-120h40v120h-40Zm140 60h130l30-30v-180l-30-30H400v240Zm60-60v-120h40v120h-40Zm140 60h160v-146H660v-34h100v-60H600v144h100v36H600v60ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconOdsSharp as default }
