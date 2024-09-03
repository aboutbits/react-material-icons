import React from 'react'
import { IconProps } from './types'

const IconNestCamIqSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80q-33 0-56.5-23.5T280-160h160v-163q-104-15-172-93.5T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 105-68 183.5T520-323v163h160q0 33-23.5 56.5T600-80H360Zm120-320q83 0 141.5-58.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 83 58.5 141.5T480-400Zm0-120q-33 0-56.5-23.5T400-600q0-33 23.5-56.5T480-680q33 0 56.5 23.5T560-600q0 33-23.5 56.5T480-520Z" />
  </svg>
)

export { IconNestCamIqSharpFilled as default }
