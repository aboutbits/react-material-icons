import React from 'react'
import { IconProps } from './types'

export const IconTabRecentOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m786-146 28-28-74-74v-112h-40v128l86 86ZM520-560h280v-160H520v160ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v251q-35-25-76.5-38T719-520q-116 0-197.5 82T440-240q0 21 3 41t9 39H160Z" />
  </svg>
)
