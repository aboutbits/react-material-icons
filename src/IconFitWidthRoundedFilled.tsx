import React from 'react'
import { IconProps } from './types.js'

export const IconFitWidthRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-640q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v640q0 17-11.5 28.5T160-120q-17 0-28.5-11.5T120-160Zm640 0v-640q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v640q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160ZM480-440q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm-160 0q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm320 0q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440Z" />
  </svg>
)