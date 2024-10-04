import React from 'react'
import { IconProps } from './types.js'

export const IconNoBackpackOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m800-273-80-80v-287q0-33-23.5-56.5T640-720H353l-73-74v-86h120v80h160v-80h120v86q52 14 86 56t34 98v367ZM660-413l-67-67h67v67Zm-213-67v80H300v-80h147Zm95-51Zm-80 146ZM207-753l56 56q-11 11-17 25.5t-6 31.5v480h480v-79l80 79q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-480q0-33 12.5-62t34.5-51ZM791-56 56-791l56-57 735 736-56 56Z" />
  </svg>
)
