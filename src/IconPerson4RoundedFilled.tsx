import React from 'react'
import { IconProps } from './types'

export const IconPerson4RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-440q-66 0-113-47t-47-113v-140q0-25 17.5-42.5T380-800q15 0 28.5 7t21.5 20q8-13 21.5-20t28.5-7q15 0 28.5 7t21.5 20q8-13 21.5-20t28.5-7q25 0 42.5 17.5T640-740v140q0 66-47 113t-113 47ZM160-200v-32q0-34 17.5-62.5T224-338q62-31 126-46.5T480-400q66 0 130 15.5T736-338q29 15 46.5 43.5T800-232v32q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200Z" />
  </svg>
)
