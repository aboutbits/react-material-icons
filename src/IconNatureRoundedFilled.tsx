import React from 'react'
import { IconProps } from './types.js'

export const IconNatureRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-160v-160h-80q-83 0-141.5-58.5T160-520q0-60 33-110.5t89-73.5q9-75 65.5-125.5T480-880q76 0 132.5 50.5T678-704q56 23 89 73.5T800-520q0 83-58.5 141.5T600-320h-80v160h200q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240q-17 0-28.5-11.5T200-120q0-17 11.5-28.5T240-160h200Z" />
  </svg>
)
