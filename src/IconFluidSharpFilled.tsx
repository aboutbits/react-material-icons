import React from 'react'
import { IconProps } from './types'

const IconFluidSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-40H440v-163q-103-14-171.5-92.5T200-480v-440h560v440q0 106-68.5 184.5T520-203v83h240v80ZM550-440h126q2-10 3-19.5t1-20.5v-40H520v-80h160v-80H480v-80h200v-80H280v320h110q33 0 62.5 15t49.5 41q8 11 21 17.5t27 6.5Z" />
  </svg>
)

export { IconFluidSharpFilled as default }
