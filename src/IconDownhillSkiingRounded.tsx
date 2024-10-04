import React from 'react'
import { IconProps } from './types'

const IconDownhillSkiingRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M740-40q-26 0-50.5-4T642-56L108-251q-11-5-16.5-15.5T90-289q5-12 16-17.5t23-.5l247 90 69-178-143-149q-27-28-21.5-66.5T320-669l139-80q17-10 34.5-11.5T528-755q17 6 29.5 19t18.5 31l13 43q13 43 42.5 76t70.5 50l12-36q4-12 14.5-17.5T751-591q12 4 18 15t2 23l-36 109q-74-12-131-58t-84-114l-101 58 105 120q8 8 9.5 19t-2.5 22l-80 207 124 45 84-257q14 5 28 9t29 7l-85 262 31 11q18 6 37.5 9.5T740-100q17 0 33-2t32-7q12-4 23.5 1T845-92q5 12-1 23.5T826-53q-20 6-41.5 9.5T740-40Zm-80-660q-33 0-56.5-23.5T580-780q0-33 23.5-56.5T660-860q33 0 56.5 23.5T740-780q0 33-23.5 56.5T660-700Z" />
  </svg>
)

export { IconDownhillSkiingRounded as default }
