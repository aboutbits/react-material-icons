import React from 'react'
import { IconProps } from './types.js'

export const IconScoreboardOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h120v-80h80v80h240v-80h80v80h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm290-80h60v-60h-60v60Zm170-120h100q17 0 28.5-11.5T760-400v-160q0-17-11.5-28.5T720-600H620q-17 0-28.5 11.5T580-560v160q0 17 11.5 28.5T620-360Zm-420 0h180v-60H260v-40h80q17 0 28.5-11.5T380-500v-60q0-17-11.5-28.5T340-600H200v60h120v40h-80q-17 0-28.5 11.5T200-460v100Zm250-20h60v-60h-60v60Zm190-40v-120h60v120h-60ZM450-520h60v-60h-60v60Zm0-140h60v-60h-60v60Z" />
  </svg>
)
