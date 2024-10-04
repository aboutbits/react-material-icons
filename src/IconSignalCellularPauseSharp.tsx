import React from 'react'
import { IconProps } from './types'

const IconSignalCellularPauseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v440h-80v-247L273-160h247v80H80Zm520 0v-280h80v280h-80Zm160 0v-280h80v280h-80ZM537-424Z" />
  </svg>
)

export { IconSignalCellularPauseSharp as default }
