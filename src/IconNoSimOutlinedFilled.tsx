import React from 'react'
import { IconProps } from './types.js'

export const IconNoSimOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-273 296-776l104-104h320q33 0 56.5 23.5T800-800v527Zm20 245L608-240l57-56 135 135v1q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-480l24-24L28-820l57-56L876-85l-56 57Z" />
  </svg>
)
