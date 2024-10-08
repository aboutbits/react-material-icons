import React from 'react'
import { IconProps } from './types'

const IconGppBadRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-424 56 56q11 11 28 11t28-11q11-11 11-28t-11-28l-56-56 56-56q11-11 11-28t-11-28q-11-11-28-11t-28 11l-56 56-56-56q-11-11-28-11t-28 11q-11 11-11 28t11 28l56 56-56 56q-11 11-11 28t11 28q11 11 28 11t28-11l56-56Zm0 340q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z" />
  </svg>
)

export { IconGppBadRoundedFilled as default }
