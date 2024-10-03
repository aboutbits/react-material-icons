import React from 'react'
import { IconProps } from './types.js'

export const IconVapingRoomsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-200q-39-10-79.5-15t-80.5-5H80v-80h40q40 0 80.5-5t79.5-15v120Zm40 0v-120h560v120H320Zm100-40q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm300-120v-52q0-39-23-59.5T642-492h-62q-56 0-95-39t-39-95q0-56 39-95t95-39v60q-30 0-52 21t-22 53q0 32 22 53t52 21h62q56 0 97 36t41 90v66h-60Zm100 0v-90q0-66-46-114t-114-48v-60q30 0 52-22t22-52q0-30-22-52t-52-22v-60q56 0 95 39t39 95q0 29-11 52.5T754-650q56 26 91 80t35 120v90h-60Z" />
  </svg>
)
