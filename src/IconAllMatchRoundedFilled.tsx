import React from 'react'
import { IconProps } from './types.js'

export const IconAllMatchRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-25 0-36-22t4-42l192-256-192-256q-15-20-4-42t36-22h440q19 0 36 8.5t28 23.5l168 223q11 14-1 29.5t-31 7.5q-17-6-39.5-9t-40.5-3q-116 0-198 82t-82 198q0 9 .5 18t1.5 17q2 18-9 31.5T405-160H160ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-1-138 90-89q9-9 9-21t-9-21q-9-9-21-8.5t-21 8.5l-76 74-18-18q-9-9-21-8.5t-21 9.5q-8 9-8.5 21t8.5 21l32 32q12 12 28 12t28-12Z" />
  </svg>
)
