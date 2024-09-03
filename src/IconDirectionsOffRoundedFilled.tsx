import React from 'react'
import { IconProps } from './types'

const IconDirectionsOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-57 640-208 536-104q-12 12-26.5 18T480-80q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l161-161 225 225-1 114L55-792q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM360-360q17 0 28.5-11.5T400-400v-80h81l-80-80h-41q-17 0-28.5 11.5T320-520v120q0 17 11.5 28.5T360-360Zm520-120q0 15-6 29.5T856-424l-74 74q-12 12-28 12t-28-12L618-458l34-34q12-12 12-28t-12-28l-84-84q-8-8-18-3.5T540-620v60h-24L350-726q-12-12-12-28t12-28l74-74q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5Z" />
  </svg>
)

export { IconDirectionsOffRoundedFilled as default }
