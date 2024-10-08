import React from 'react'
import { IconProps } from './types'

const IconFloorLampSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200v-320H186l111-360h366l111 360H520v320h-80ZM320-80v-80h320v80H320Z" />
  </svg>
)

export { IconFloorLampSharpFilled as default }
