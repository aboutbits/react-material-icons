import React from 'react'
import { IconProps } from './types'

const IconSecurityUpdateGoodRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m442-472 114-114q11-11 28-11t28 11q11 11 11 28t-11 28L470-388q-12 12-28 12t-28-12l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l28 28ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z" />
  </svg>
)

export { IconSecurityUpdateGoodRoundedFilled as default }
