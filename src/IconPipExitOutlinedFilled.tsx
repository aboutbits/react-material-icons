import React from 'react'
import { IconProps } from './types'

const IconPipExitOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m683-300 57-57-124-123h104v-80H480v240h80v-103l123 123ZM80-600v-200h280v200H80Zm0 80h360v-280h360q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-280Z" />
  </svg>
)

export { IconPipExitOutlinedFilled as default }
