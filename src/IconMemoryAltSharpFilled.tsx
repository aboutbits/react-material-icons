import React from 'react'
import { IconProps } from './types'

const IconMemoryAltSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h80v-240h-80v240Zm200 0h80v-240h-80v240Zm200 0h80v-240h-80v240ZM200-120v-80H80v-560h120v-80h80v80h160v-80h80v80h160v-80h80v80h120v560H760v80h-80v-80H520v80h-80v-80H280v80h-80Z" />
  </svg>
)

export { IconMemoryAltSharpFilled as default }
