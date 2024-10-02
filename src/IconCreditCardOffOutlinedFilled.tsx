import React from 'react'
import { IconProps } from './types'

export const IconCreditCardOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M871-203 594-480h206v-160H434L274-800h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM160-480h206L206-640h-46v160ZM818-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H126L26-820l57-57L875-85l-57 57Z" />
  </svg>
)
