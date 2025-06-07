import React from 'react'
import { IconProps } from './types.js'

export const IconRocketRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M215-102q-20 8-37.5-4T160-139v-178q0-20 9.5-38t26.5-29l44-29q7 81 21.5 140T309-139l-94 37Zm177-58q-14 0-24-9t-15-22q-27-69-40-127.5T300-453q0-112 40-213.5T449-831q6-6 14.5-8.5T480-842q8 0 16.5 2.5T511-831q69 63 109 164.5T660-453q0 77-13 135t-40 127q-5 13-15 22t-24 9H392Zm88-280q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440Zm265 338-94-37q33-75 47.5-134T720-413l44 29q17 11 26.5 29t9.5 38v178q0 21-17.5 33t-37.5 4Z" />
  </svg>
)
