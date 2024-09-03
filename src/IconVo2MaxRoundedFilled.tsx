import React from 'react'
import { IconProps } from './types'

const IconVo2MaxRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-160q-17 0-28.5-11.5T520-200v-160q0-17 11.5-28.5T560-400h100q17 0 28.5 11.5T700-360v160q0 17-11.5 28.5T660-160H560Zm20-60h60v-120h-60v120Zm190-40q-13 0-21.5-8.5T740-290q0-13 8.5-21.5T770-320h110q17 0 28.5 11.5T920-280v70q0 17-11.5 28.5T880-170h-80v30h90q13 0 21.5 8.5T920-110q0 13-8.5 21.5T890-80H780q-17 0-28.5-11.5T740-120v-70q0-17 11.5-28.5T780-230h80v-30h-90ZM180-160q-59 0-99.5-42T40-304v-178q0-47 20-88t57-70l173-136q14-11 22-27.5t8-34.5v-42q0-17 11.5-28.5T360-920q17 0 28.5 11.5T400-880v42q0 18 8 34.5t23 27.5l173 136q36 29 55.5 68.5T679-486q0 19-12.5 32.5T634-440h-74q-33 0-56.5 23.5T480-360v151q0 12-10 17.5t-20-1.5q-24-20-37.5-48T400-304v-394l-40-32-40 32v394q1 60-40 102t-100 42Z" />
  </svg>
)

export { IconVo2MaxRoundedFilled as default }
