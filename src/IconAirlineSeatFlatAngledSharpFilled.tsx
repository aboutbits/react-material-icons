import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatFlatAngledSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M850-273 361-451l96-263 489 178-96 263Zm-41 113L57-434l27-75 752 274-27 75ZM253-498q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)

export { IconAirlineSeatFlatAngledSharpFilled as default }
