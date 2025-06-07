import React from 'react'
import { IconProps } from './types.js'

export const IconDesktopPortraitSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240h200v-360H440v360ZM320-360h60v-300h140v-60H320v360ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
)
