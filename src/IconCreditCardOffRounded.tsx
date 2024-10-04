import React from 'react'
import { IconProps } from './types.js'

export const IconCreditCardOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m871-203-71-71v-206H594L434-640h366v-80H354l-80-80h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM385-462Zm192-35Zm-211 17H160v240h446L366-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v80h46L54-792q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57L686-160H160Z" />
  </svg>
)
