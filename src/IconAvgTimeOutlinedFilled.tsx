import React from 'react'
import { IconProps } from './types.js'

export const IconAvgTimeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-840v-80h240v80H360Zm40 470-44-88q-5-11-15-16.5t-21-5.5H122q15-135 117-227.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q32 42 51 88.5t25 97.5H665l-69-138q-11-23-36-23t-36 23L400-370Zm80 290q-139 0-241-92.5T122-400h173l69 138q11 23 36 23t36-23l124-248 44 88q5 11 15 16.5t21 5.5h198q-15 135-117 227.5T480-80Z" />
  </svg>
)
