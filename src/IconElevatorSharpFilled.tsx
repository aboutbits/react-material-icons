import React from 'react'
import { IconProps } from './types.js'

export const IconElevatorSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240h120v-160h40v-180H240v180h40v160Zm60-380q21 0 35.5-14.5T390-670q0-21-14.5-35.5T340-720q-21 0-35.5 14.5T290-670q0 21 14.5 35.5T340-620Zm180 100h200L620-680 520-520Zm100 240 100-160H520l100 160ZM120-120v-720h720v720H120Z" />
  </svg>
)
