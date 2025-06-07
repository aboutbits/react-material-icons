import React from 'react'
import { IconProps } from './types.js'

export const IconFiberDvrSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-360h170l30-30v-180l-30-30H160v240Zm60-60v-120h80v120h-80Zm224 60h60l70-240h-60l-40 138-40-138h-60l70 240Zm156 0h60v-80h46l34 80h60l-36-84h36v-156H600v240Zm60-140v-40h80v40h-80ZM40-160v-640h880v640H40Zm80-80h720v-480H120v480Zm0 0v-480 480Z" />
  </svg>
)
