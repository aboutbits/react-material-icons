import React from 'react'
import { IconProps } from './types.js'

export const IconWaterLossOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M258-360q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H210l48 440Zm21 280q-31 0-53.5-20T200-151l-80-729h720l-80 729q-3 31-25.5 51T681-80H279Z" />
  </svg>
)
