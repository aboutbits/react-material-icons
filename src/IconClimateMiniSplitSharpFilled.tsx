import React from 'react'
import { IconProps } from './types'

const IconClimateMiniSplitSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-480v-400h800v400H720v-240H240v240H80Zm200 80h80q0 83-58.5 141.5T160-200v-80q50 0 85-35t35-85Zm40-80v-160h320v160H320Zm120 320v-240h80v240h-80Zm160-240h80q0 50 35 85t85 35v80q-83 0-141.5-58.5T600-400Z" />
  </svg>
)

export { IconClimateMiniSplitSharpFilled as default }
