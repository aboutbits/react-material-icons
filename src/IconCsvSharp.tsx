import React from 'react'
import { IconProps } from './types'

const IconCsvSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M190-360h160v-60H250v-120h100v-60H190v240Zm196 0h160v-146H446v-34h100v-60H386v144h100v36H386v60Zm264 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconCsvSharp as default }
