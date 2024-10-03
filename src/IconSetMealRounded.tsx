import React from 'react'
import { IconProps } from './types.js'

export const IconSetMealRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360q-33 0-56.5-23.5T40-440v-360q0-33 23.5-56.5T120-880h720q33 0 56.5 23.5T920-800v360q0 33-23.5 56.5T840-360H120Zm0-440v360h720v-360H120Zm692 544-659 34q-13 1-22-7t-10-21q-1-13 7.5-22t21.5-10l659-34q13-1 22 7t10 21q1 13-7.5 22T812-256Zm-2 135H150q-13 0-21.5-8.5T120-151q0-13 8.5-21.5T150-181h660q13 0 21.5 8.5T840-151q0 13-8.5 21.5T810-121ZM410-500q74 0 142.5-26T672-606q5 34 31 55t61 27q11 2 23.5.5T800-542v-156q0-17-12.5-18.5t-23.5.5q-35 7-61 28t-31 56q-53-52-120.5-80T410-740q-79 0-142 23.5T152-633q-1 1-5 13 0 4 5 13 53 60 116 83.5T410-500ZM120-800v360-360Z" />
  </svg>
)
