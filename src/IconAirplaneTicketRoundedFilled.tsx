import React from 'react'
import { IconProps } from './types'

export const IconAirplaneTicketRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m472-444-96 24-43-32q-3-2-16-4l-5 2q-9 2-13 10.5t1 16.5l46 80q4 6 10 8.5t13 .5l341-90q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-149-140q-5-5-12-6.5t-14 .5l-5 1q-14 3-19.5 16t1.5 25l78 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
