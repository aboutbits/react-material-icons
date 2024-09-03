import React from 'react'
import { IconProps } from './types'

const IconSignalWifiOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M717-357 298-775q45-12 90-18.5t92-6.5q136 0 260.5 51.5T960-600L717-357ZM819-28 604-244 480-120 0-600q32-32 66.5-59t72.5-49L27-820l57-57L876-85l-57 57Z" />
  </svg>
)

export { IconSignalWifiOffSharpFilled as default }
