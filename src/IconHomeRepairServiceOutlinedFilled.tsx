import React from 'react'
import { IconProps } from './types'

const IconHomeRepairServiceOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-640h240v-80H360v80ZM80-160v-200h160v40h80v-40h320v40h80v-40h160v200H80Zm0-240v-160q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v160H720v-80h-80v80H320v-80h-80v80H80Z" />
  </svg>
)

export { IconHomeRepairServiceOutlinedFilled as default }
