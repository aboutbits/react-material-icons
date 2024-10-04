import React from 'react'
import { IconProps } from './types'

const IconHMobiledataRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-440v120q0 17-11.5 28.5T320-280q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640v120h240v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280q-17 0-28.5-11.5T600-320v-120H360Z" />
  </svg>
)

export { IconHMobiledataRounded as default }
