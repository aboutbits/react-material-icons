import React from 'react'
import { IconProps } from './types'

const IconLowPriorityRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-501q0 71 47.5 122T326-322l-34-34q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L348-148q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36q-105-6-176.5-81T80-500q0-109 75.5-184.5T340-760h100q17 0 28.5 11.5T480-720q0 17-11.5 28.5T440-680H340q-75 0-127.5 52T160-501Zm440 181h240q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240H600q-17 0-28.5-11.5T560-280q0-17 11.5-28.5T600-320Zm0-220h240q17 0 28.5 11.5T880-500q0 17-11.5 28.5T840-460H600q-17 0-28.5-11.5T560-500q0-17 11.5-28.5T600-540Zm0-220h240q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680H600q-17 0-28.5-11.5T560-720q0-17 11.5-28.5T600-760Z" />
  </svg>
)

export { IconLowPriorityRounded as default }
