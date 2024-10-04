import React from 'react'
import { IconProps } from './types'

const IconNearbyOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-481q0 15-6 30t-18 27l-68 68q-15 15-36 15t-36-15q-15-15-15-36t15-36l52-52-288-288-52 52q-15 15-36 15t-36-15q-15-15-15-36t15-36l66-66q12-12 27-18.5t31-6.5q16 0 30.5 6t26.5 18l319 319q12 11 18 25.5t6 29.5ZM642-208 536-104q-12 11-26.5 17T480-81q-15 0-29.5-5.5T424-104L105-423q-12-12-18-26.5T81-479q0-15 6-29.5t18-26.5l103-104L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l681 681q11 11 11 27t-11 27q-11 11-27.5 11T766-85L642-208ZM193-479l287 287 90-88-57-57-5 5q-12 12-28 12t-28-12L333-451q-12-12-12-28t12-28l5-5-56-56-89 89Zm447 15q-7 7-16 7t-16-7L464-608q-7-7-7-16t7-16q7-7 16-7t16 7l144 144q7 7 7 16t-7 16Z" />
  </svg>
)

export { IconNearbyOffRounded as default }
