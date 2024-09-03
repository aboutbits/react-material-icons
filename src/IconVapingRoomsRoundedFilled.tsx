import React from 'react'
import { IconProps } from './types'

const IconVapingRoomsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-120h500q25 0 42.5 17.5T880-260q0 25-17.5 42.5T820-200H320Zm530-160q-13 0-21.5-8.5T820-390v-60q0-66-46-114t-114-48q-13 0-21.5-8.5T630-642q0-13 8.5-21.5T660-672q30 0 52-22t22-52q0-30-22-52t-52-22q-13 0-21.5-8.5T630-850q0-13 8.5-21.5T660-880q56 0 95 39t39 95q0 29-11 52.5T754-650q56 26 91 80t35 120v60q0 13-8.5 21.5T850-360Zm-100 0q-13 0-21.5-8.5T720-390v-22q0-39-23-59.5T642-492h-62q-56 0-95-39t-39-95q0-56 39-95t95-39q13 0 21.5 8.5T610-730q0 13-8.5 21.5T580-700q-30 0-52 21t-22 53q0 32 22 53t52 21h62q56 0 97 36t41 90v36q0 13-8.5 21.5T750-360ZM280-200q-39-10-79.5-15t-80.5-5q-17 0-28.5-11.5T80-260q0-16 14.5-22.5T120-300q40 0 80.5-5t79.5-15v120Zm140-40q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
  </svg>
)

export { IconVapingRoomsRoundedFilled as default }
