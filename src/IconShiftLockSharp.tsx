import React from 'react'
import { IconProps } from './types.js'

export const IconShiftLockSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240v-200H120l360-440 360 440H640v200H320Zm80-80h160v-200h111L480-754 289-520h111v200Zm80-217ZM160-80v-80h640v80H160Z" />
  </svg>
)
