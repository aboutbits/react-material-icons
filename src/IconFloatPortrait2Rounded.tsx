import React from 'react'
import { IconProps } from './types'

const IconFloatPortrait2Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-520h160q17 0 28.5-11.5T560-560v-120q0-17-11.5-28.5T520-720H360q-17 0-28.5 11.5T320-680v120q0 17 11.5 28.5T360-520Zm440 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
)

export { IconFloatPortrait2Rounded as default }
