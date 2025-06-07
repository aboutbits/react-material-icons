import React from 'react'
import { IconProps } from './types.js'

export const IconPictureInPictureSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm280-200h320v-240H440v240Zm80-80v-80h160v80H520ZM160-240v-480 480Z" />
  </svg>
)
