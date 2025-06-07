import React from 'react'
import { IconProps } from './types.js'

export const IconPillOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-615q0 45-17 86t-49 73l-52 52q-12 12-28 12t-28-12L404-666q-12-12-12-28t12-28l52-52q32-32 73-49t86-17q94 0 159.5 65.5T840-615ZM581-263l-77 77q-32 32-73 49t-86 17q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l77-77L84-760q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L581-263Z" />
  </svg>
)
