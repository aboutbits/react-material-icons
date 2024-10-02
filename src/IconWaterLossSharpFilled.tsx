import React from 'react'
import { IconProps } from './types'

export const IconWaterLossSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M258-360q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H210l48 440ZM208-80l-88-800h720L752-80H208Z" />
  </svg>
)
