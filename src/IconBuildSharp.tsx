import React from 'react'
import { IconProps } from './types'

export const IconBuildSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M715-103 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l273 271-142 142Zm0-114 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l102 102-184 184-102-102q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
  </svg>
)
