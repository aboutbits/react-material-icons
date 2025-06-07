import React from 'react'
import { IconProps } from './types.js'

export const IconSpeedCameraSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m701-360-87-50 140-104 86 50-139 104ZM160-160v-80h200v-238L171-587l140-242 450 260-244 182-77-44v271H160Z" />
  </svg>
)
