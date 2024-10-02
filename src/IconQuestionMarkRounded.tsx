import React from 'react'
import { IconProps } from './types'

export const IconQuestionMarkRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M584-637q0-43-28.5-69T480-732q-29 0-52.5 12.5T387-683q-16 23-43.5 26.5T296-671q-14-13-15.5-32t9.5-36q32-48 81.5-74.5T480-840q97 0 157.5 55T698-641q0 45-19 81t-70 85q-37 35-50 54.5T542-376q-4 24-20.5 40T482-320q-23 0-39.5-15.5T426-374q0-39 17-71.5t57-68.5q51-45 67.5-69.5T584-637ZM480-80q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z" />
  </svg>
)
