import React from 'react'
import { IconProps } from './types'

export const IconCreditCardClockOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm307 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v210q-36-25-78-37.5T716-560q-54 0-104 21t-88 59H160v240h283q3 21 9 41t15 39Zm320-25 28-28-75-75v-112h-40v128l87 87ZM721-80q-84 0-142.5-58T520-280q0-84 58.5-142T721-480q83 0 141 58.5T920-280q0 83-58 141.5T721-80Z" />
  </svg>
)
