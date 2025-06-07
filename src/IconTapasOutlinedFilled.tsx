import React from 'react'
import { IconProps } from './types.js'

export const IconTapasOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-40v-360h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-80h80v80h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v360h-80Zm360 0v-80h80v-286q-53-14-86.5-56.5T560-560v-360h320v360q0 55-33.5 97.5T760-406v286h80v80H600Zm40-680h160v-120H640v120Z" />
  </svg>
)
