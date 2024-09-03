import React from 'react'
import { IconProps } from './types'

const IconChairSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80H40v-440h120v-200h640v200h120v440H800v80h-80v-80H240v80h-80Zm-40-160h720v-280h-80v200H200v-200h-80v280Zm160-160h400v-200h40v-120H240v120h40v200Zm200 80Zm0-80Zm0 80Z" />
  </svg>
)

export { IconChairSharp as default }
