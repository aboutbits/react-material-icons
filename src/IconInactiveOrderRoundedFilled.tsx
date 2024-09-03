import React from 'react'
import { IconProps } from './types'

const IconInactiveOrderRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M690-300q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6q8 0 14-6t6-14v-120Zm60 0v120q0 8 6 14t14 6q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14Zm-70-300q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600h400Zm40 560q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-85v-675q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v220q0 17-14 27.5t-31 5.5q-28-7-57-10t-58-3H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440h244q-17 17-31.5 37T467-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280h163q-2 10-2.5 19.5T440-240q0 26 5 51t13 50q5 11-4 17.5t-17-1.5l-3-3q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32-14 9Z" />
  </svg>
)

export { IconInactiveOrderRoundedFilled as default }
