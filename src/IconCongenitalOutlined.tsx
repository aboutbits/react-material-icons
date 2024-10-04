import React from 'react'
import { IconProps } from './types'

const IconCongenitalOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M392-200q-100 0-185.5-51T74-391l-25-46q-11-22-8.5-46T59-526l201-245q9-11 21-18t26-9q14-2 27-.5t26 8.5l120 64 98-54q17-10 36-7t33 17q14 13 17.5 31.5T660-703L536-414q-11 26-36 39t-54 7l-304-65q36 71 103.5 112T392-280h179q55 0 106-21t90-59h-34q-37 0-60.5-28T654-452l27-178q3-19 15-31t28-17q16-5 32.5-.5T786-660l114 134q15 18 18.5 41.5T912-440l-15 32q-45 95-132.5 151.5T571-200H392Zm433-241 15-33-86-100-20 133h91Zm-674-71 312 66 101-235-84 47-159-86-170 208Zm207-71Zm429 109Z" />
  </svg>
)

export { IconCongenitalOutlined as default }
