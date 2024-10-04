import React from 'react'
import { IconProps } from './types.js'

export const IconBorderColorRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160 0q-33 0-56.5-23.5T80-80q0-33 23.5-56.5T160-160h640q33 0 56.5 23.5T880-80q0 33-23.5 56.5T800 0H160Zm0-280v-113q0-8 3-15.5t9-13.5l436-435q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L342-252q-6 6-13.5 9t-15.5 3H200q-17 0-28.5-11.5T160-280Zm504-408 56-56-56-56-56 56 56 56Z" />
  </svg>
)