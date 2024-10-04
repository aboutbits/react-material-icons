import React from 'react'
import { IconProps } from './types.js'

export const IconSportsHandballSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m368-4-70-40 120-208-68-40-60 104-70-40 206-356q-38-39-57-89t-19-103q0-36 9-71.5t29-68.5l68 40q-14 23-20 47.5t-6 50.5q0 53 26 99.5t74 74.5l90 52q62 36 91 103.5T740-322q0 38-10 74t-28 68l-70-40q14-24 20-49t6-51q0-32-9-62t-29-56L368-4Zm272-596q-33 0-56.5-23.5T560-680q0-33 23.5-56.5T640-760q33 0 56.5 23.5T720-680q0 33-23.5 56.5T640-600ZM540-800q-26 0-43-18t-17-42q0-26 18-43t42-17q26 0 43 18t17 42q0 26-18 43t-42 17Z" />
  </svg>
)
