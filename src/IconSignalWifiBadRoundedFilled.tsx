import React from 'react'
import { IconProps } from './types.js'

export const IconSignalWifiBadRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-223-56 55q-11 11-27.5 11.5T648-168q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11t28.5 11q12 12 12 28.5T872-335l-55 55 55 56q11 11 11.5 27.5T872-168q-11 11-28 11t-28-11l-56-55Zm9-300h-8q-101 0-172 71t-71 172v8q1 18 4 36.5t9 35.5q3 10 1.5 19.5T524-164q-9 9-20.5 13.5T480-146q-12 0-23.5-4.5T436-164L63-537q-13-13-19-28t-6-32q0-17 7-34t22-29q88-69 194-104.5T480-800q113 0 219 35.5T893-660q15 11 22 28t7 34q0 17-6 32.5T897-537l-20 20q-8 8-17 9.5t-19-2.5q-17-6-35-9t-37-4Z" />
  </svg>
)
