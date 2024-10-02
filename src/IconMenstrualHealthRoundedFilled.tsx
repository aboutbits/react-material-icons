import React from 'react'
import { IconProps } from './types'

export const IconMenstrualHealthRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M146-299q-7 3-14.5 1.5T119-306q-20-41-29.5-85T80-480v-300q0-25 22-36t42 4l124 93q11 8 12.5 20.5T275-675q-47 72-81 150.5T160-360v15.5q0 7.5 1 15.5 1 11-3.5 19T146-299Zm334 179q-100 0-170-70t-70-170q0-65 43-165t148-237q19-24 49-24t49 24q104 136 147.5 236.5T720-360q0 100-70 170t-170 70Zm333-177q-8-3-12.5-11.5T799-329q1-8 1-15.5V-360q0-86-34-164.5T685-675q-7-11-5.5-23.5T692-719l124-93q20-15 42-4t22 36v300q0 45-9.5 89T841-306q-4 8-12 10t-16-1Z" />
  </svg>
)
