import React from 'react'
import { IconProps } from './types.js'

export const IconRadioRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-534l523-213q14-5 27.5.5T649-887q5 14-.5 27.5T629-841L332-720h468q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm160-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-520h480v-40q0-17 11.5-28.5T680-600q17 0 28.5 11.5T720-560v40h80v-120H160v120Z" />
  </svg>
)