import React from 'react'
import { IconProps } from './types'

const IconArrowLeftRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M526-314 381-459q-5-5-7-10t-2-11q0-6 2-11t7-10l145-145q3-3 6.5-4.5t7.5-1.5q8 0 14 5.5t6 14.5v304q0 9-6 14.5t-14 5.5q-2 0-14-6Z" />
  </svg>
)

export { IconArrowLeftRoundedFilled as default }
