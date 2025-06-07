import React from 'react'
import { IconProps } from './types.js'

export const IconGoogleWifiSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M184-560h592l-11-160H195l-11 160Zm-5 80-13 200h628l-13-200H179Zm21 320-13-40H80l40-600h720l40 600H773l-13 40H200Z" />
  </svg>
)
