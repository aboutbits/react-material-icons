import React from 'react'
import { IconProps } from './types'

const IconAirplanemodeInactiveRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m560-624 299 207q10 7 15.5 18t5.5 23v22q0 26-21.5 40.5T813-309l-74-28-339-337v-126q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176Zm-80 484L333-96q-20 6-36.5-6.5T280-135v-24q0-10 4.5-18.5T297-192l103-72v-144L147-307q-24 10-45.5-4.5T80-352v-22q0-12 5.5-23t15.5-18l195-137L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L560-288v24l103 70q8 6 12.5 14.5T680-161v24q0 20-16.5 32.5T627-98l-147-42Z" />
  </svg>
)

export { IconAirplanemodeInactiveRoundedFilled as default }
