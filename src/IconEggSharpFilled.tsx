import React from 'react'
import { IconProps } from './types'

const IconEggSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-240h40v-80h-40q-50 0-85-35t-35-85v-40h-80v40q0 83 58.5 141.5T520-240Zm-40 120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Z" />
  </svg>
)

export { IconEggSharpFilled as default }
