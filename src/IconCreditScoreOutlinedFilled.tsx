import React from 'react'
import { IconProps } from './types'

const IconCreditScoreOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M405-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240H771L598-307 484-419 315-250l90 90Zm193 80L428-250l56-56 114 112 226-226 56 58L598-80ZM160-640v160h640v-160H160Z" />
  </svg>
)

export { IconCreditScoreOutlinedFilled as default }
