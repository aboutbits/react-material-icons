import React from 'react'
import { IconProps } from './types.js'

export const IconAdfScannerOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-200q0-50 35-85t85-35h40v-320h480v320h40q50 0 85 35t35 85v200H80Zm240-320h320v-240H320v240Zm400 200q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Z" />
  </svg>
)
