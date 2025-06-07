import React from 'react'
import { IconProps } from './types.js'

export const IconVo2MaxOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-160q-17 0-28.5-11.5T520-200v-160q0-17 11.5-28.5T560-400h100q17 0 28.5 11.5T700-360v160q0 17-11.5 28.5T660-160H560Zm20-60h60v-120h-60v120ZM740-80v-110q0-17 11.5-28.5T780-230h80v-30H740v-60h140q17 0 28.5 11.5T920-280v70q0 17-11.5 28.5T880-170h-80v30h120v60H740Zm-560-80q-59 0-99.5-42T40-304v-178q0-47 20-88t57-70l173-136q14-11 22-27.5t8-34.5v-82h80v82q0 18 8 34.5t23 27.5l173 136q36 29 56 70t20 88v42H560q-33 0-56.5 23.5T480-360v186q-38-18-59.5-51.5T400-304v-394l-40-32-40 32v394q1 60-40 102t-100 42Z" />
  </svg>
)
