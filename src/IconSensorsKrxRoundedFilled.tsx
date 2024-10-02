import React from 'react'
import { IconProps } from './types'

export const IconSensorsKrxRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-480q0 38 8.5 74.5T194-337q8 15 4 32t-17 26q-14 10-29.5 5.5T127-293q-23-43-35-89.5T80-480q0-51 12-98.5t35-89.5q9-15 24.5-19t29.5 6q13 9 17 26t-4 32q-17 32-25.5 68.5T160-480Zm320 240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm320-240q0-38-8.5-74.5T766-623q-8-15-4.5-32t16.5-26q14-10 30-6t25 19q23 42 35 89.5t12 98.5q0 51-12 97.5T833-293q-9 15-25 19.5t-30-5.5q-13-9-16.5-26t4.5-32q17-32 25.5-68.5T800-480Z" />
  </svg>
)
