import React from 'react'
import { IconProps } from './types.js'

export const IconTurnSharpLeftOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-240H320q-33 0-56.5-23.5T240-440v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248h320q33 0 56.5 23.5T720-360v240h-80Z" />
  </svg>
)