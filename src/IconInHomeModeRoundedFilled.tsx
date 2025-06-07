import React from 'react'
import { IconProps } from './types.js'

export const IconInHomeModeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m597-194 198-198q12-12 28.5-11.5T852-391q12 12 12 28t-12 28L625-109q-6 6-13 9t-15 3q-8 0-15-3t-13-9L456-222q-12-12-12-28t12-28q12-12 28-12t28 12l85 84Zm-357 34q-33 0-56.5-23.5T160-240v-295l-40 31q-13 10-29.5 8T64-512q-10-13-7.5-29T72-567l359-276q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l359 275q13 10 15.5 26t-8.5 30q-10 13-25.5 15.5T840-504l-27-20-216 217-27-27q-35-36-86-36t-86 36q-35 35-34 87t36 87H240Z" />
  </svg>
)
