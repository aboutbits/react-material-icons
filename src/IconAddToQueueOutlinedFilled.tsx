import React from 'react'
import { IconProps } from './types'

const IconAddToQueueOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320Z" />
  </svg>
)

export { IconAddToQueueOutlinedFilled as default }
