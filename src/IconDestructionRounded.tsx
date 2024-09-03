import React from 'react'
import { IconProps } from './types'

const IconDestructionRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160v-160q0-33 23.5-56.5T200-400h560q33 0 56.5 23.5T840-320v160q0 33-23.5 56.5T760-80H200Zm0-80h560v-160H200v160Zm234-548 78-138q5-9 14-13t18-2q9 2 15.5 7.5T568-837l26 157 154-42q11-3 19.5 0t13.5 11q5 8 5 17t-6 18l-92 130 29 17q14 8 18.5 24t-3.5 30q-8 14-24 18.5t-30-3.5l-68-38q-16-9-20-26.5t7-31.5l37-52-104 29-18-106-52 93-88-62 29 104-106 18 5 3q14 8 18.5 24t-3.5 30q-8 14-24 18.5t-30-3.5l-128-72q-9-5-12.5-14t-1.5-18q2-9 7.5-15.5T143-588l157-26-42-154q-3-11 0-19.5t11-13.5q8-5 17-5t18 6l130 92Zm53 248Zm-7 220Z" />
  </svg>
)

export { IconDestructionRounded as default }