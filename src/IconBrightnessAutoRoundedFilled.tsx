import React from 'react'
import { IconProps } from './types.js'

export const IconBrightnessAutoRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M312-320h64l16-46q8-21 31.5-33.5T505-412q22 0 39.5 12.5T570-366l9 27q3 8 10.5 13.5T606-320q15 0 23.5-12.5T633-359L519-661q-3-9-13.5-14t-36.5-5q-9 0-17 5t-11 14L312-320Zm114-144 52-150h4l52 150H426Zm-80 304H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Z" />
  </svg>
)
