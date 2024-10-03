import React from 'react'
import { IconProps } from './types.js'

export const IconDirectionsAltOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M639-208 535-104q-12 12-26.5 18T479-80q-15 0-29.5-6T423-104L103-424q-12-12-18-26.5T79-480q0-15 6-29.5t18-26.5l104-104L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57L639-208ZM523-324l-57-56-16 16q-11 11-11 27.5t12 28.5q11 11 28 11t28-11l16-16ZM406-440l-80-80h-7q-17 0-28.5 11.5T279-480q0 17 11.5 28.5T319-440h87Zm231 0 13-12q13-11 12.5-28T650-509L507-652q-12-12-28-12t-28 12q-4 4-6.5 8t-4.5 9l-91-91q-12-12-12-28t12-28l74-74q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5q0 15-6 29.5T855-424l-73 73q-12 12-28.5 12T725-351l-88-89Z" />
  </svg>
)
