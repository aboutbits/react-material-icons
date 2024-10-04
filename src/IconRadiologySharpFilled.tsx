import React from 'react'
import { IconProps } from './types'

const IconRadiologySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm160-80h60v-83q0-6-7-19l-80-94q-7-8-10-17t-3-18q11 5 22.5 8t23.5 3q20 0 39.5-8.5T440-413q8-8 18.5-12t21.5-4q12 0 22.5 4t17.5 12q15 16 35 24.5t40 8.5q12 0 23-3t22-8q0 9-3 18t-10 17l-80 94q-3 5-5 9.5t-2 9.5v83h60v-72l72-84q11-11 19.5-30t8.5-44q0-13-3-25.5t-9-24.5q5-11 8.5-23.5T700-489q0-20-6.5-38.5T673-562l-73-86v-72h-60v83q0 5 1.5 10t5.5 9l80 95q6 8 9.5 16.5T640-489q0 19-12.5 33.5T595-441q-8 0-16.5-3T563-454q-17-17-38.5-26t-44.5-9q-23 0-44.5 9T397-454q-6 7-14 10t-17 3q-20 0-33-14.5T320-490q0-9 3-17.5t10-16.5l80-94q3-5 5-9.5t2-9.5v-83h-60v72l-72 84q-11 11-19.5 30t-8.5 44q0 14 3 26.5t8 23.5q-6 12-8.5 24.5T260-390q0 25 8.5 44t19.5 30l72 84v72Z" />
  </svg>
)

export { IconRadiologySharpFilled as default }
