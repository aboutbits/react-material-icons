import React from 'react'
import { IconProps } from './types'

const IconMailOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m763-84-77-76H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H126l-43-43q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm92-170q-11 5-22 3.5T812-262L575-499l209-131q14-9 16-22.5t-5-24.5q-7-11-20-15t-27 5L526-548 342-732q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h429q33 0 56.5 23.5T880-720v429q0 14-7 23t-18 14Z" />
  </svg>
)

export { IconMailOffRoundedFilled as default }
