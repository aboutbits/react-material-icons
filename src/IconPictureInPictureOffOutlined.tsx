import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m554-520 80 80h66q25 0 42.5-17.5T760-500v-120q0-25-17.5-42.5T700-680H500q-22 0-38 14t-21 34l33 32h206v80H554Zm317 317-71-71v-446H354l-80-80h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM383-463Zm194-34ZM818-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446L26-820l57-57L875-85l-57 57Z" />
  </svg>
)

export { IconPictureInPictureOffOutlined as default }