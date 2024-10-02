import React from 'react'
import { IconProps } from './types'

export const IconCreditCardOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m871-203-71-71v-206H594L434-640h366v-80H354l-80-80h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5ZM385-462Zm192-35Zm-211 17H160v240h446L366-480ZM818-28 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v80h46L26-820l57-57L875-85l-57 57Z" />
  </svg>
)
