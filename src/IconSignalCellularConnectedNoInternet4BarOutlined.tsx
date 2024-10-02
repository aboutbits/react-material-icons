import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularConnectedNoInternet4BarOutlined: React.FC<
  IconProps
> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v240H720v560H80Zm760 0q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-40-160v-320h80v320h-80Z" />
  </svg>
)
