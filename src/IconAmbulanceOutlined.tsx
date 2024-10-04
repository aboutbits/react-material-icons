import React from 'react'
import { IconProps } from './types'

const IconAmbulanceOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-800v-160h80v160h-80Zm-177 57L143-863l57-57 120 120-57 57ZM160-40q-17 0-28.5-11.5T120-80v-320l84-240q6-18 21.5-29t34.5-11h100v-80h131q-24 34-37.5 74.5T440-600H274l-59 160h276q17 24 38 44.5t47 35.5H200v160h560v-123q21-3 41-9t39-15v267q0 17-11.5 28.5T800-40h-40q-17 0-28.5-11.5T720-80v-40H240v40q0 17-11.5 28.5T200-40h-40Zm80-200h120q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320H240v80Zm480 0v-80H600q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240h120ZM200-360v160-160Zm491-150 139-138-42-42-97 95-39-39-42 43 81 81Zm29-290q83 0 141.5 58.5T920-600q0 83-58.5 141.5T720-400q-83 0-141.5-58.5T520-600q0-83 58.5-141.5T720-800Z" />
  </svg>
)

export { IconAmbulanceOutlined as default }
