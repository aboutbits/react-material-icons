import React from 'react'
import { IconProps } from './types.js'

export const IconKeyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 120q77 0 139-44t87-116h14l52 52q6 6 13 8.5t15 2.5q8 0 15-2.5t13-8.5l52-52 70 55q6 5 13.5 7.5T779-336q8-1 14.5-4.5T805-350l90-103q5-6 7.5-13t2.5-15q0-8-3-14.5t-8-11.5l-41-41q-6-6-13.5-9t-15.5-3H506q-24-68-84.5-114T280-720q-100 0-170 70T40-480q0 100 70 170t170 70Z" />
  </svg>
)
