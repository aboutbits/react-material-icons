import React from 'react'
import { IconProps } from './types.js'

export const IconBedroomChildSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h60v-60h360v60h60v-254h-60v-146H300v146h-60v254Zm120-260v-80h240v80H360Zm-60 140v-80h360v80H300ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)
