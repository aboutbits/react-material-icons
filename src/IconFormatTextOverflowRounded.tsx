import React from 'react'
import { IconProps } from './types.js'

export const IconFormatTextOverflowRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm320-440q-17 0-28.5-11.5T480-640v-120q0-17 11.5-28.5T520-800q17 0 28.5 11.5T560-760v120q0 17-11.5 28.5T520-600Zm167 233q-12 12-28.5 12T630-367q-12-12-12-28t12-28l17-17H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h287l-17-17q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l85 85q12 12 12 28t-12 28l-85 85ZM520-160q-17 0-28.5-11.5T480-200v-120q0-17 11.5-28.5T520-360q17 0 28.5 11.5T560-320v120q0 17-11.5 28.5T520-160Z" />
  </svg>
)
