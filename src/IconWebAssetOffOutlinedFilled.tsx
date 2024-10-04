import React from 'react'
import { IconProps } from './types'

const IconWebAssetOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M818-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800v114L26-820l57-57L875-85l-57 57ZM160-240h446L206-640h-46v400Zm711 37-71-71v-366H434L274-800h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5Z" />
  </svg>
)

export { IconWebAssetOffOutlinedFilled as default }
