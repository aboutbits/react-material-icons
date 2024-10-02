import React from 'react'
import { IconProps } from './types'

export const IconDonutSmallRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M521-830q0-20 15-32t34-8q115 26 196.5 108.5T872-564q4 17-7.5 30.5T833-520H602q-4 0-7-2t-5-6q-9-21-25-37.5T529-591q-4-2-6-4.5t-2-6.5v-228ZM389-91q-134-31-221-139T81-480q0-142 87-249.5T389-869q20-5 36 8.5t16 34.5v226q0 1-6 8-34 14-54 44.5T361-480q0 37 20 66.5t54 43.5q2 1 6 8v228q0 21-16 34.5T389-91Zm176 2q-17 4-30.5-7.5T521-126v-233q0-4 2-7t6-5q20-9 36-25t25-36q1-2 11-8h232q18 0 30 15t8 34q-25 115-108 196.5T565-89Z" />
  </svg>
)
