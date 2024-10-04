import React from 'react'
import { IconProps } from './types'

const IconSettingsInputComponentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-166l-80-80v-434h80v-200h80v200h80v434l-80 80v166h-80Zm320 0v-166l-80-80v-434h80v-200h80v200h80v434l-80 80v166h-80Zm320 0v-166l-80-80v-434h80v-200h80v200h80v434l-80 80v166h-80ZM120-640v160h80v-160h-80Zm320 0v160h80v-160h-80Zm320 0v160h80v-160h-80ZM160-280l40-40v-80h-80v80l40 40Zm320 0 40-40v-80h-80v80l40 40Zm320 0 40-40v-80h-80v80l40 40ZM160-440Zm320 0Zm320 0Z" />
  </svg>
)

export { IconSettingsInputComponentSharp as default }
