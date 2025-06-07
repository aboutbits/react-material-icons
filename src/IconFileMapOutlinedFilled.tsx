import React from 'react'
import { IconProps } from './types.js'

export const IconFileMapOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-120q97-82 144.5-152.5T672-523q0-91-58-144t-134-53q-76 0-134 53t-58 144q0 60 47.5 130.5T480-240Zm0-230q-21 0-35.5-14.5T430-520q0-21 14.5-35.5T480-570q21 0 35.5 14.5T530-520q0 21-14.5 35.5T480-470Z" />
  </svg>
)
