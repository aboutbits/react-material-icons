import React from 'react'
import { IconProps } from './types.js'

export const IconFoldedHandsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M630-320v-112l-76-139q-20 10-32 29t-12 42v320l57 100h313l-40-500-280-320-13 13q-29 29-34.5 68t14.5 74l163 297v128h-60Zm-360 0v-128l163-297q20-35 13.5-74T412-887l-12-13-280 320L80-80h313l57-100v-320q0-23-12.5-42T406-571l-76 139v112h-60Z" />
  </svg>
)