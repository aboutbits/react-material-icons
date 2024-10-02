import React from 'react'
import { IconProps } from './types'

export const IconNoBackpackOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m660-413 140 140v-367q0-56-34-98t-86-56v-86H560v80H400v-80H280v86l313 314h67v67ZM791-56 663-184h112l25 24q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-480q0-33 12.5-62t34.5-51l39 39v113L56-791l56-57 735 736-56 56ZM300-400h147l-80-80h-67v80Z" />
  </svg>
)
