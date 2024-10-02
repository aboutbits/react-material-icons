import React from 'react'
import { IconProps } from './types'

export const IconNoSimRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M324-748q-12-12-12-28t12-28l53-53q11-11 25.5-17t30.5-6h287q33 0 56.5 23.5T800-800v431q0 27-24.5 37t-43.5-9L324-748ZM240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l1-1L56-792q-12-12-11.5-28T57-848q12-11 28-11.5t28 11.5l735 735q11 11 11 27.5T848-57q-12 12-28.5 12T791-57L608-240l57-56 135 135v1q0 33-23.5 56.5T720-80H240Z" />
  </svg>
)
