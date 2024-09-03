import React from 'react'
import { IconProps } from './types'

const IconBook4RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320q17 0 28.5-11.5T360-360v-400q0-17-11.5-28.5T320-800q-17 0-28.5 11.5T280-760v400q0 17 11.5 28.5T320-320ZM240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h360q33 0 56.5 23.5T680-800v480q0 33-23.5 56.5T600-240H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-600q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v600q0 33-23.5 56.5T760-80H240Z" />
  </svg>
)

export { IconBook4RoundedFilled as default }
