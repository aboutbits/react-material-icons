import React from 'react'
import { IconProps } from './types.js'

export const IconWatchOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 639-209 600-79H360l-54-182q-48-38-77-95t-29-124q0-36 9-69.5t26-63.5L56-792l57-57 736 736-57 57ZM480-280q20 0 38-3.5t35-10.5L294-553q-7 17-10.5 35t-3.5 38q0 83 58.5 141.5T480-280Zm247-68-60-60q7-17 10-34.5t3-37.5q0-83-58.5-141.5T480-680q-20 0-37.5 3T408-667l-86-86 38-128h240l54 182q48 38 77 95t29 124q0 36-8 69t-25 63ZM420-800h120-120Zm0 640h120-120Zm-16-590q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H420l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T480-200q-19 0-37.5-2.5T404-210l16 50Z" />
  </svg>
)
