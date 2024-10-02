import React from 'react'
import { IconProps } from './types'

export const IconBungalowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-248l-44 70-68-42 312-500 312 500-68 42-44-70v248H520v-200h-80v200H280Zm160-280h80v-80h-80v80Z" />
  </svg>
)
