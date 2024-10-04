import React from 'react'
import { IconProps } from './types.js'

export const IconEnergySavingsLeafRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m433-307 184-164q9-8 5-19t-16-13l-144-14 86-119q3-5 3.5-9.5T548-654q-4-5-10-4.5t-11 4.5L344-490q-9 8-5 19t16 13l144 14-87 119q-3 5-3 9.5t4 8.5q4 4 9.5 4t10.5-4Zm47 147q-56 0-105.5-17.5T284-227l-55 55q-6 6-13.5 9t-15.5 3q-17 0-28.5-11.5T160-200q0-8 3-15.5t9-13.5l55-55q-32-41-49.5-90.5T160-480q0-134 93-227t227-93h240q33 0 56.5 23.5T800-720v240q0 134-93 227t-227 93Z" />
  </svg>
)