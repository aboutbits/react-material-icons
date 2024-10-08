import React from 'react'
import { IconProps } from './types'

const IconBook4Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h360q33 0 56.5 23.5T680-800v480q0 33-23.5 56.5T600-240H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-600q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v600q0 33-23.5 56.5T760-80H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z" />
  </svg>
)

export { IconBook4Rounded as default }
