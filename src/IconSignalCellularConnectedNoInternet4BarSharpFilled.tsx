import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularConnectedNoInternet4BarSharpFilled: React.FC<
  IconProps
> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v240H720v560H80Zm720-160v-320h80v320h-80Zm0 160v-80h80v80h-80Z" />
  </svg>
)
