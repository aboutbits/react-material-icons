import React from 'react'
import { IconProps } from './types'

const IconRemoveSelectionSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm60 640-56-56 142-142-142-142 56-56 142 142 142-142 56 56-142 142 142 142-56 56-142-142-142 142Zm100-640v-80h80v80h-80Zm160 160v-80h80v80h-80ZM120-760v-80h80v80h-80Zm720 0h-80v-80h80v80ZM120-120v-80h80v80h-80Z" />
  </svg>
)

export { IconRemoveSelectionSharp as default }
