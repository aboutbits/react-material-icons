import React from 'react'
import { IconProps } from './types'

export const IconFloatPortrait2Outlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-520h240v-200H320v200Zm480 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z" />
  </svg>
)
