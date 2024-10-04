import React from 'react'
import { IconProps } from './types'

const IconDetectorSmokeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m520-68-76-24 16-52q6-24 4-46.5T448-236q-25-38-31.5-78.5T424-400l16-52 76 24-16 52q-8 23-5 47.5t17 44.5q23 38 30.5 80t-6.5 84l-16 52Zm-176 0-76-24 16-52q6-23 4-47t-16-45q-26-37-32-79t8-85l16-52 76 24-16 52q-8 23-5 48t17 44q24 36 31 79.5t-7 84.5l-16 52Zm348 0-76-24 16-52q6-23 4-47t-16-45q-26-37-32-79t8-85l16-52 76 24-16 52q-8 24-5 47.5t17 44.5q24 38 30.5 80t-6.5 84l-16 52ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z" />
  </svg>
)

export { IconDetectorSmokeSharp as default }
