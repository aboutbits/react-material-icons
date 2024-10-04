import React from 'react'
import { IconProps } from './types.js'

export const IconMediaLinkRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M550-650h100q13 0 21.5-8.5T680-680q0-13-8.5-21.5T650-710H550q-13 0-21.5 8.5T520-680q0 13 8.5 21.5T550-650ZM120-40q-33 0-56.5-23.5T40-120v-320q0-33 23.5-56.5T120-520h480q33 0 56.5 23.5T680-440v320q0 33-23.5 56.5T600-40H120Zm620-360v-40q0-38-18.5-72.5T672-579h8q50 0 85-25.5t35-75.5q0-50-35-85t-85-35h-20q-13 0-21.5 8.5T630-770q0 13 8.5 21.5T660-740h20q25 0 42.5 17.5T740-680q0 25-17.5 42.5T680-620h-20q-13 0-21.5 8.5T630-590q0 13 8.5 12t21.5-1h-30q-8 0-15-.5t-15-.5h-30v-10q0-13-8.5-21.5T540-620h-20q-25 0-42.5-17.5T460-680q0-25 17.5-42.5T520-740h20q13 0 21.5-8.5T570-770q0-13-8.5-21.5T540-800h-20q-50 0-85 35t-35 85q0 32 15 57.5t39 42.5H280v-260q0-33 23.5-56.5T360-920h480q33 0 56.5 23.5T920-840v360q0 33-23.5 56.5T840-400H740ZM433-263q10-6 10-17t-10-17l-102-64q-10-6-20.5-.5T300-344v128q0 12 10.5 17.5t20.5-.5l102-64Z" />
  </svg>
)