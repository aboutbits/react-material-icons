import React from 'react'
import { IconProps } from './types'

export const IconFluidOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-40q-33 0-56.5-23.5T440-120v-83q-103-14-171.5-92.5T200-480v-360q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v360q0 106-68.5 184.5T520-203v83h240v80H520Zm30-400h126q2-10 3-19.5t1-20.5v-40H520v-80h160v-80H480v-80h200v-80H280v320h110q33 0 62.5 15t49.5 41q8 11 21 17.5t27 6.5Z" />
  </svg>
)
