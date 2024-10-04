import React from 'react'
import { IconProps } from './types.js'

export const IconWavingHandOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M39-680q0-100 70.5-170.5T280-921v81q-66 0-113 47t-47 113H39Zm173 469q-91-91-91-219t91-219l70-71 12 12q29 29 29 70.5T294-567l-14 14q-12 12-12 28.5t12 28.5l36 36q26 26 26 63t-26 63l43 43q44-44 44-105.5T358-503l-22-22q26-26 37-58.5t9-66.5l179-179q12-12 28.5-12t28.5 12q12 12 12 28.5T618-772L431-585l42 42 241-240q12-12 28-12t28 12q12 12 12 28t-12 28L530-486l42 42 212-212q12-12 28.5-12t28.5 12q12 12 12 28.5T841-599L629-387l42 42 162-162q12-12 28.5-12t28.5 12q12 12 12 28.5T890-450L650-211q-91 91-219 91t-219-91ZM680-39v-81q66 0 113-47t47-113h81q0 100-70.5 170.5T680-39Z" />
  </svg>
)
