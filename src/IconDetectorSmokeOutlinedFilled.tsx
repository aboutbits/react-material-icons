import React from 'react'
import { IconProps } from './types'

export const IconDetectorSmokeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m324-640 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-120h720v120q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM520-68l-76-24 16-52q6-24 4-46.5T448-236q-25-38-31.5-78.5T424-400l16-52 76 24-16 52q-8 23-5 47.5t17 44.5q23 38 30.5 80t-6.5 84l-16 52Zm-176 0-76-24 16-52q6-23 4-47t-16-45q-26-37-32-79t8-85l16-52 76 24-16 52q-8 23-5 48t17 44q24 36 31 79.5t-7 84.5l-16 52Zm348 0-76-24 16-52q6-23 4-47t-16-45q-26-37-32-79t8-85l16-52 76 24-16 52q-8 24-5 47.5t17 44.5q24 38 30.5 80t-6.5 84l-16 52Z" />
  </svg>
)
