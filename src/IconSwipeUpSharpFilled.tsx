import React from 'react'
import { IconProps } from './types.js'

export const IconSwipeUpSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M245-400q-51-64-78-141t-27-159q0-27 3-54t9-54l-70 70-42-42 140-140 140 140-42 42-65-64q-7 25-10 50.5t-3 51.5q0 70 22.5 135.5T288-443l-43 43Zm366 290L304-253l38-83 116-9-126-344 75-28 110 301 38-14-55-150 75-28 55 151 37-14-41-112 75-28 41 113 38-14-14-37 75-28 125 338-355 129Z" />
  </svg>
)
