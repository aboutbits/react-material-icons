import React from 'react'
import { IconProps } from './types.js'

export const IconBungalowRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120q-17 0-28.5-11.5T280-160v-208l-23 37q-9 14-25 17.5t-30-5.5q-14-9-18-25t5-30l257-412q6-10 15-14t19-4q10 0 19 4t15 14l257 412q9 14 5 30t-18 25q-14 9-30 5t-25-18l-23-36v208q0 17-11.5 28.5T640-120H520v-160q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280v160H320Zm160-280q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400Z" />
  </svg>
)
