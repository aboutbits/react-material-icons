import React from 'react'
import { IconProps } from './types.js'

export const IconSwapCallsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-354v-286q0-66 47-113t113-47q66 0 113 47t47 113v280q0 33 23.5 56.5T600-280q33 0 56.5-23.5T680-360v-286l-35 35q-12 12-28.5 11.5T588-612q-11-12-11.5-28t11.5-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q12 12 11.5 28T852-612q-12 12-28.5 12.5T795-611l-35-35v286q0 66-47 113t-113 47q-66 0-113-47t-47-113v-280q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640v286l35-35q12-12 28.5-11.5T372-388q11 12 11.5 28T372-332L268-228q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L108-332q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T165-389l35 35Z" />
  </svg>
)