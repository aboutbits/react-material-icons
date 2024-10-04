import React from 'react'
import { IconProps } from './types.js'

export const IconMicOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M672-377q-14-8-18-24.5t4-30.5q7-11 11.5-23.5T676-481q4-17 15.5-28t28.5-11q17 0 28 12t9 29q-3 23-10.5 45T727-392q-8 14-24.5 18.5T672-377ZM532-542 383-691q-11-11-17-25.5t-6-30.5v-13q0-50 35-85t85-35q50 0 85 35t35 85v189q0 27-24.5 37.5T532-542Zm-92 382v-84q-92-12-157.5-77T203-479q-2-17 9-29t28-12q17 0 28.5 11.5T284-480q14 70 69.5 115T480-320q34 0 64.5-10.5T600-360l57 57q-29 23-63.5 38.5T520-244v84q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Zm324 76L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Z" />
  </svg>
)