import React from 'react'
import { IconProps } from './types.js'

export const IconVapeFreeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-200q-39-10-79.5-15t-80.5-5H80v-80h40q40 0 80.5-5t79.5-15v120ZM791-56 647-200H320v-120h207L56-791l56-57 735 736-56 56Zm82-144L753-320h127v120h-7Zm-453-40q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm400-120v-89q0-68-46-115.5T660-612v-60q31 0 52.5-21.5T734-746q0-31-21.5-52.5T660-820v-60q56 0 95 39t39 95q0 28-10.5 52.5T754-651q57 27 91.5 80.5T880-450v90h-60Zm-100 0v-52q0-39-23.5-60.5T641-494h-62L446-627v-1q0-56 39-95t95-39v60q-31 0-52.5 19.5T506-632q0 31 21.5 55.5T580-552h61q57 0 98 36t41 90v66h-60Z" />
  </svg>
)