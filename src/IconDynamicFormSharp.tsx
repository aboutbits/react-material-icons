import React from 'react'
import { IconProps } from './types'

const IconDynamicFormSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-520v-280h440v280H80Zm80-80h280v-120H160v120ZM80-160v-280h520v280H80Zm80-80h360v-120H160v120Zm520 80v-360h-80v-280h280l-80 200h80L680-160ZM190-270h60v-60h-60v60Zm0-360h60v-60h-60v60Zm-30 30v-120 120Zm0 360v-120 120Z" />
  </svg>
)

export { IconDynamicFormSharp as default }
