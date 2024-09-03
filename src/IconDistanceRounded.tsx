import React from 'react'
import { IconProps } from './types'

const IconDistanceRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-106 0-173-33.5T240-200q0-19 8.5-35t25.5-30q14-10 30.5-8t26.5 16q10 14 7.5 30.5T322-200q13 16 60 28t98 12q51 0 98-12t60-28q-14-10-16.5-26.5T629-257q10-14 26.5-16t30.5 8q17 14 25.5 30t8.5 35q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 81q-12 0-24-4t-22-12q-118-94-176-183.5T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 86-58 175.5T526-235q-10 8-22 12t-24 4Zm0-301q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z" />
  </svg>
)

export { IconDistanceRounded as default }