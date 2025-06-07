import React from 'react'
import { IconProps } from './types.js'

export const IconRocketOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-237q0-20 9.5-38t26.5-29l44-29q7 84 22 143t47 131L160-80Zm209-80q-35-66-52-140t-17-153q0-125 49.5-235.5T480-856q81 57 130.5 167.5T660-453q0 78-17 151.5T591-160H369Zm111-280q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440ZM800-80l-149-59q32-72 47-131t22-143l44 29q17 11 26.5 29t9.5 38v237Z" />
  </svg>
)
