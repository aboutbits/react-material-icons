import React from 'react'
import { IconProps } from './types.js'

export const IconBubbleOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120q-41 0-79-9t-76-26l61-61q23 8 46.5 12t47.5 4q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 24 4 47.5t12 46.5l-60 60q-18-36-27-74.5t-9-79.5q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840Zm40 520v-144L176-120l-56-56 344-344H320v-80h280v280h-80Z" />
  </svg>
)
