import React from 'react'
import { IconProps } from './types'

const IconWaterOrpSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-80v-240h180v240H260Zm60-60h60v-120h-60v120Zm160 60v-240h200v156h-36l36 84h-60l-34-80h-46v80h-60Zm240 0v-240h200v160H780v80h-60ZM540-220h80v-40h-80v40Zm240 0h80v-40h-80v40Zm-600 54q-47-45-73.5-107T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v8H180v234Z" />
  </svg>
)

export { IconWaterOrpSharpFilled as default }
