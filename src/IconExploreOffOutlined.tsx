import React from 'react'
import { IconProps } from './types'

const IconExploreOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M596-478 478-596l222-104-104 222ZM791-55l-91-91q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-91-91 57-57 736 736-57 57Zm23-205-58-58q22-38 33-78.5t11-83.5q0-133-93.5-226.5T480-800q-43 0-83.5 11T318-756l-58-58q49-32 104.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 60-17 115.5T814-260ZM537-537ZM423-423Zm57 263q43 0 83.5-11t78.5-33L482-364 260-260l102-224-158-158q-22 38-33 78.5T160-480q0 133 93.5 226.5T480-160Z" />
  </svg>
)

export { IconExploreOffOutlined as default }
