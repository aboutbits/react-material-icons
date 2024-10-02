import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularPauseOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v440H520v360H80Zm680 0v-280h80v280h-80Zm-160 0v-280h80v280h-80Z" />
  </svg>
)
