import React from 'react'
import { IconProps } from './types.js'

export const IconArmingCountdownRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680v60q50 0 85 35t35 85q0 50-35 85t-85 35q-33 0-61.5-17T374-443l-52 29q24 44 66 69t92 25ZM330-466q13 0 21.5-8.5T360-496q0-13-8.5-21.5T330-526q-13 0-21.5 8.5T300-496q0 13 8.5 21.5T330-466Zm22-84q13 0 21.5-8.5T382-580q0-13-8.5-21.5T352-610q-13 0-21.5 8.5T322-580q0 13 8.5 21.5T352-550Zm58-55q13 0 21.5-8.5T440-635q0-13-8.5-21.5T410-665q-13 0-21.5 8.5T380-635q0 13 8.5 21.5T410-605Zm70 521q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z" />
  </svg>
)
