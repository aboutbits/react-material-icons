import React from 'react'
import { IconProps } from './types.js'

export const IconSubscriptRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-160q-17 0-28.5-11.5T760-200v-40q0-17 11.5-28.5T800-280h80v-40H780q-8 0-14-6t-6-14q0-8 6-14t14-6h100q17 0 28.5 11.5T920-320v40q0 17-11.5 28.5T880-240h-80v40h100q8 0 14 6t6 14q0 8-6 14t-14 6H800Zm-483-80q-27 0-39.5-23t1.5-46l141-222-128-201q-14-22-1.5-45t38.5-23q12 0 22 5.5t16 15.5l111 179h4l110-179q6-10 16.5-15.5T630-800q27 0 39 23t-2 46L539-531l142 222q14 23 1 46t-39 23q-12 0-22-5.5T605-261L482-457h-4L355-261q-6 10-16.5 15.5T317-240Z" />
  </svg>
)
