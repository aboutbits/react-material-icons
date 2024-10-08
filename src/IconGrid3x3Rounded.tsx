import React from 'react'
import { IconProps } from './types'

const IconGrid3x3Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320H200q-17 0-28.5-11.5T160-360q0-17 11.5-28.5T200-400h120v-160H200q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h120v-120q0-17 11.5-28.5T360-800q17 0 28.5 11.5T400-760v120h160v-120q0-17 11.5-28.5T600-800q17 0 28.5 11.5T640-760v120h120q17 0 28.5 11.5T800-600q0 17-11.5 28.5T760-560H640v160h120q17 0 28.5 11.5T800-360q0 17-11.5 28.5T760-320H640v120q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-120H400v120q0 17-11.5 28.5T360-160q-17 0-28.5-11.5T320-200v-120Zm80-80h160v-160H400v160Z" />
  </svg>
)

export { IconGrid3x3Rounded as default }
