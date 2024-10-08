import React from 'react'
import { IconProps } from './types'

const IconCampingRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-120q0-13 4-25t12-23l334-450-46-62q-5-7-7-14.5t-1-15q1-7.5 5-14.5t11-12q14-10 30-8t26 16l32 43 32-43q10-14 26-16t30 8q14 10 16 26t-8 30l-46 62 334 450q8 11 12 23t4 25v120q0 17-11.5 28.5T840-80H120q-17 0-28.5-11.5T80-120Zm249-40h302L480-371 329-160Z" />
  </svg>
)

export { IconCampingRoundedFilled as default }
