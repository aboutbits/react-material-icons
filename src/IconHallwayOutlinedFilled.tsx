import React from 'react'
import { IconProps } from './types.js'

export const IconHallwayOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h120l160-160 160 160h120q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm40-160h480L570-440 450-280l-90-120-120 160Zm164-560h152l-76-76-76 76Z" />
  </svg>
)
