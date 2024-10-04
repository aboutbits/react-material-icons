import React from 'react'
import { IconProps } from './types.js'

export const IconTapasOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-40v-360h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-80h80v80h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v360h-80Zm-80-440h240q8 0 14-6t6-14q0-8-6-14t-14-6H160q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-240h240q8 0 14-6t6-14q0-8-6-14t-14-6H160q-8 0-14 6t-6 14q0 8 6 14t14 6ZM600-40v-80h80v-286q-53-14-86.5-56.5T560-560v-360h320v360q0 55-33.5 97.5T760-406v286h80v80H600Zm120-440q33 0 56.5-23.5T800-560v-80H640v80q0 33 23.5 56.5T720-480Zm-80-240h160v-120H640v120ZM140-480v-40 40Zm0-240v-40 40Zm580 80Z" />
  </svg>
)
