import React from 'react'
import { IconProps } from './types.js'

export const IconMediaOutputOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160v-160q0-51 19-94.5t51-75.5l43 43q-25 25-39 57t-14 70v40h100v200h-80Zm400-114-60-60v-66q0-75-52.5-127.5T640-500q-15 0-29 2t-28 7l-46-46q23-11 49-17t54-6q100 0 170 70t70 170v126ZM323-363q-19-5-31-21t-12-36q0-25 17.5-42.5T340-480q5 0 10 1t10 3q-14 26-23.5 54T323-363Zm155-233L194-880h326q33 0 56.5 23.5T600-800v162q-33 4-63.5 15T478-596ZM160-160q-33 0-56.5-23.5T80-240v-603h37l296 296-2.5 2.5q-.5.5-1.5 2.5-15-9-32.5-13.5T340-560q-58 0-99 41t-41 99q0 54 34.5 92.5T320-281v121H160ZM820-28 28-820l56-56L876-84l-56 56Z" />
  </svg>
)
