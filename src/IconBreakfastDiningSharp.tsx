import React from 'react'
import { IconProps } from './types'

export const IconBreakfastDiningSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-422q-37-22-58.5-58.5T80-680q0-66 47-113t113-47h480q66 0 113 47t47 113q0 43-21.5 79.5T800-542v422H160Zm80-80h480v-388l40-24q18-11 29-29t11-39q0-33-23.5-56.5T720-760H240q-33 0-56.5 23.5T160-680q0 22 10.5 40.5T200-610l40 22v388Zm240-64 176-176-176-176-176 176 176 176Zm0-112-64-64 64-64 64 64-64 64Zm0-104Z" />
  </svg>
)
