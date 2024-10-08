import React from 'react'
import { IconProps } from './types'

const IconRemoveRoadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-440v-360h80v360h-80ZM160-160v-640h80v640h-80Zm280-480v-160h80v160h-80Zm0 240v-160h80v160h-80Zm0 240v-160h80v160h-80Zm177 23 85-85-85-84 57-57 85 85 85-85 56 57-85 85 84 85-55 56-86-85-85 85-56-57Z" />
  </svg>
)

export { IconRemoveRoadSharp as default }
