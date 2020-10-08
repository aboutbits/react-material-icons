import React from 'react'
import { IconProps } from './types'

const IconTripOrigin: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconTripOrigin' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
  </svg>
)

export { IconTripOrigin as default }
