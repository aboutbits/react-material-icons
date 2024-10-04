import React from 'react'
import { IconProps } from './types.js'

export const IconMintmarkOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120v-80h184L520-384v-112l240 240v-184h80v320H520ZM240-280v-40H120v-80h240v-120H200q-33 0-56.5-23.5T120-600v-120q0-33 23.5-56.5T200-800h40v-40h80v40h120v80H200v120h160q33 0 56.5 23.5T440-520v120q0 33-23.5 56.5T360-320h-40v40h-80Z" />
  </svg>
)