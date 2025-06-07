import React from 'react'
import { IconProps } from './types.js'

export const IconPlayDisabledRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M658-416 334-740q10-8 23-9.5t25 6.5l325 229q19 12 18.5 34T706-446l-48 30ZM762-84 520-328l-138 89q-20 13-41 1.5T320-273v-255L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l679 679q12 12 12 28.5T819-84q-12 11-28.5 11.5T762-84Z" />
  </svg>
)
