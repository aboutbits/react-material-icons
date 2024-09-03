import React from 'react'
import { IconProps } from './types'

const IconFireHydrantOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-80h80v-120h-40q-33 0-56.5-23.5T120-360v-80q0-33 23.5-56.5T200-520h40v-120h-80v-80h94q25-70 86.5-115T480-880q78 0 139.5 45T706-720h94v80h-80v120h40q33 0 56.5 23.5T840-440v80q0 33-23.5 56.5T760-280h-40v120h80v80H160Zm181-640h278q-21-36-57.5-58T480-800q-45 0-81.5 22T341-720Zm-21 560h320v-200h120v-80H640v-200H320v200H200v80h120v200Zm160-100q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340Zm0-60Zm0-240Z" />
  </svg>
)

export { IconFireHydrantOutlined as default }