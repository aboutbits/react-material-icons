import React from 'react'
import { IconProps } from './types'

export const IconVr180Create2dRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-560q0-134 93-227t227-93q91 0 167 46.5T684-709q8 14 1.5 30T663-656q-15 7-30 .5T610-676q-32-57-87.5-90.5T400-800q-100 0-170 70t-70 170q0 68 34.5 124t92.5 87q14 8 19 23t0 30q-6 16-21 23t-29-1q-80-40-128-116.5T80-560ZM480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80h320v-320H480v320Zm140-70-32-44q-6-8-16-8t-16 8l-32 42q-8 10-2 21t18 11h199q13 0 18.5-11t-2.5-21l-51-67q-6-8-16-8t-16 8l-52 69Zm20-90ZM393-567Z" />
  </svg>
)
