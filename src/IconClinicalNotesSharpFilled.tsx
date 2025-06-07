import React from 'react'
import { IconProps } from './types.js'

export const IconClinicalNotesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440-40v-171q42-24 86-40t92-24l62 75 62-75q48 6 92 23t86 40v172H440Zm-80-80H120v-720h720v280q-31-39-70-59.5T680-640v-40H280v80h280q-20 16-36 36t-27 44H280v80h200q0 21 4.5 41t12.5 39H280v80h80v160Z" />
  </svg>
)
