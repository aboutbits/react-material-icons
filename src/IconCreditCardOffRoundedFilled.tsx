import React from 'react'
import { IconProps } from './types'

const IconCreditCardOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M871-203 594-480h206v-160H434L274-800h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM160-480h206L206-640h-46v160ZM790-57 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H126l-72-72q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57Z" />
  </svg>
)

export { IconCreditCardOffRoundedFilled as default }
