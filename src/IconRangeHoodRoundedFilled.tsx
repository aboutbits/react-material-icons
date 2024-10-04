import React from 'react'
import { IconProps } from './types'

const IconRangeHoodRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M194-480q-20 0-28-18.5t6-32.5l108-109v-120q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v120l109 109q14 14 6.5 32.5T768-480H194Zm-34 320q-33 0-56.5-23.5T80-240v-120q0-17 11.5-28.5T120-400h720q17 0 28.5 11.5T880-360v120q0 33-23.5 56.5T800-160H160Zm270-132h100q13 0 21.5-8.5T560-322q0-13-8.5-21.5T530-352H430q-13 0-21.5 8.5T400-322q0 13 8.5 21.5T430-292Z" />
  </svg>
)

export { IconRangeHoodRoundedFilled as default }
