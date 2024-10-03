import React from 'react'
import { IconProps } from './types.js'

export const IconMediaLinkOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m300-180 160-100-160-100v200Zm220-470h160v-60H520v60ZM120-40q-33 0-56.5-23.5T40-120v-320q0-33 23.5-56.5T120-520h480q33 0 56.5 23.5T680-440v320q0 33-23.5 56.5T600-40H120Zm620-360v-40q0-38-18.5-70T672-560h8q50 0 85-35t35-85q0-50-35-85t-85-35h-50v60h50q25 0 42.5 17.5T740-680q0 25-17.5 42.5T680-620h-50v60q-8 0-15-10t-15-10h-30v-40h-50q-25 0-42.5-17.5T460-680q0-25 17.5-42.5T520-740h50v-60h-50q-50 0-85 35t-35 85q0 32 15 57.5t39 42.5H280v-260q0-33 23.5-56.5T360-920h480q33 0 56.5 23.5T920-840v360q0 33-23.5 56.5T840-400H740Z" />
  </svg>
)
