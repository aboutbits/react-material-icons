import React from 'react'
import { IconProps } from './types'

const IconCreditCardClockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m787-185 28-28-75-75v-112h-40v128l87 87ZM721-80q-84 0-142.5-58T520-280q0-84 58.5-142T721-480q83 0 141 58.5T920-280q0 83-58 141.5T721-80ZM80-160v-640h800v293q-18-13-38-23t-42-17v-93H160v160h360q-39 38-61.5 89.5T436-280q0 32 7 62.5t20 57.5H80Z" />
  </svg>
)

export { IconCreditCardClockSharpFilled as default }
