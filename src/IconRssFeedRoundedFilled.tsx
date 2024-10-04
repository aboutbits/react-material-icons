import React from 'react'
import { IconProps } from './types.js'

export const IconRssFeedRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm540 0q-26 0-43.5-19T676-184q-11-97-52.5-181.5T516-516q-66-66-150.5-107.5T184-676q-26-3-45-20.5T120-740q0-26 18-42.5t43-14.5q123 11 230.5 62.5T601-601q82 82 133.5 189.5T797-181q2 25-14.5 43T740-120Zm-240 0q-25 0-43-17.5T434-180q-9-49-31.5-90.5T346-346q-34-34-75.5-56.5T180-434q-25-5-42.5-23T120-500q0-26 18-43t43-13q73 10 136.5 42.5T431-431q50 50 82.5 113.5T556-181q4 25-13 43t-43 18Z" />
  </svg>
)