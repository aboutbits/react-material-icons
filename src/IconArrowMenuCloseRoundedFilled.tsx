import React from 'react'
import { IconProps } from './types.js'

export const IconArrowMenuCloseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M406-314 268-452q-12-12-12-28t12-28l138-138q10-10 22-5t12 19v304q0 14-12 19t-22-5Zm114 154v-640q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v640q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160Z" />
  </svg>
)