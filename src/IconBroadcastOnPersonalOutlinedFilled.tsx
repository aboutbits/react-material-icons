import React from 'react'
import { IconProps } from './types.js'

export const IconBroadcastOnPersonalOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M650-120v-200q-9-8-14.5-18.5T630-360q0-21 15-35.5t35-14.5q21 0 35.5 14.5T730-360q0 11-4.5 22T710-320v200h-60ZM80-160v-480l320-240 270 201q-28 1-54 6t-51 15q-90 35-147 115t-57 183q0 57 18 106t53 94H80Zm416-16q-35-38-55.5-85.5T420-360q0-109 76-184.5T680-620q109 0 184.5 75.5T940-360q0 51-19 98.5T865-177l-43-43q29-29 43.5-65t14.5-75q0-84-58-142t-142-58q-83 0-141.5 58T480-360q0 39 15.5 75.5T539-219l-43 43Zm71-71q-22-23-34.5-52T520-360q0-67 47-113.5T680-520q67 0 113.5 46.5T840-360q0 31-11.5 60T794-248l-43-42q14-14 21.5-32t7.5-38q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 20 8 38t22 32l-43 43Z" />
  </svg>
)