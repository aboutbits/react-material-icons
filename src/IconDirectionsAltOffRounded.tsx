import React from 'react'
import { IconProps } from './types'

const IconDirectionsAltOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-57 640-208 536-104q-12 12-26.5 18T480-80q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l104-104L55-792q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM584-264l-60-60-16 16q-11 11-27.5 11.5T452-308q-11-11-11.5-27.5T451-364l16-16-60-60h-87q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520h7l-63-64-104 104 320 320 104-104Zm296-216q0 15-6 29.5T856-424l-74 74q-11 11-28 11t-28-11q-11-11-11-28t11-28l74-74-320-320-74 74q-11 11-28 11t-28-11q-11-11-11-28t11-28l74-74q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5Zm-243 41 14-13q13-11 12.5-28T651-509L508-652q-12-12-28-12t-28 12q-4 4-6.5 8t-4.5 9l196 196Zm-99-99ZM424-424Z" />
  </svg>
)

export { IconDirectionsAltOffRounded as default }