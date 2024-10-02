import React from 'react'
import { IconProps } from './types'

export const IconOpenJamSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80h280v-288l64 64 56-56-160-160-160 160 56 56 64-64v168H80v-520h800v520H600v120h120v80H240Z" />
  </svg>
)
