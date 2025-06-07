import React from 'react'
import { IconProps } from './types.js'

export const IconAirlineSeatFlatAngledOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m361-451 96-263 338 123q63 23 91 82.5t5 122.5l-41 113-489-178ZM57-434l27-75 752 274-27 75L57-434Zm196-64q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)
