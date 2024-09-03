import React from 'react'
import { IconProps } from './types'

const IconAddToQueueSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM320-120v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconAddToQueueSharp as default }
