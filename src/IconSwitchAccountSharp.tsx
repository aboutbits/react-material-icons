import React from 'react'
import { IconProps } from './types'

export const IconSwitchAccountSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-520q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM320-330q45-53 108-81.5T560-440q69 0 132 28.5T800-330v-470H320v470Zm-80 90v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm480-520q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600ZM428-320h264q-29-20-63-30t-69-10q-35 0-69 10t-63 30Zm132-245Z" />
  </svg>
)
