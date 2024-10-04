import React from 'react'
import { IconProps } from './types.js'

export const IconSpeedCameraOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m701-360-87-50 140-104 86 50-139 104ZM160-160v-80h200v-238l-120-69q-29-17-37.5-48.5T211-656l60-104q17-29 48.5-37.5T380-789l381 220-244 182-77-44v191q0 33-23.5 56.5T360-160H160Z" />
  </svg>
)