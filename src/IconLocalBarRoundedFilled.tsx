import React from 'react'
import { IconProps } from './types'

const IconLocalBarRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200v-200L138-740q-8-8-13-18.5t-5-21.5q0-26 18-43t44-17h596q26 0 44 17t18 43q0 11-5 21.5T822-740L520-400v200h160q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h160ZM298-680h364l72-80H226l72 80Z" />
  </svg>
)

export { IconLocalBarRoundedFilled as default }
