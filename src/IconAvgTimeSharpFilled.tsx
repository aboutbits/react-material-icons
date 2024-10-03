import React from 'react'
import { IconProps } from './types.js'

export const IconAvgTimeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-840v-80h240v80H360Zm37 456-52-96H122q15-135 117-227.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q32 42 51 88.5t25 97.5H664L560-670 397-384Zm83 304q-139 0-241-92.5T122-400h174l104 190 163-286 52 96h223q-15 135-116.5 227.5T480-80Z" />
  </svg>
)
