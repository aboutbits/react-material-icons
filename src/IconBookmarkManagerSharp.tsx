import React from 'react'
import { IconProps } from './types'

const IconBookmarkManagerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-480 480Zm-80 80v-640h320l80 80h400v86l-80 79v-85H447l-80-80H160v480h324l-4 4v76H80Zm480 80v-123l263-262 123 122L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
  </svg>
)

export { IconBookmarkManagerSharp as default }
