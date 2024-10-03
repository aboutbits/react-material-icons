import React from 'react'
import { IconProps } from './types.js'

export const IconBookRibbonSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M620-400v-440l120-40v440l-120 40Zm220 104v-481q21 8 41 17t39 22v580q-47-39-103-60.5T700-240q-60 0-116 21t-104 59q-48-38-104-59t-116-21q-61 0-117 21.5T40-158v-580q48-33 104.5-47.5T260-800q70 0 135.5 23T520-716v438q42-20 87.5-31t92.5-11q36 0 71 6t69 18Z" />
  </svg>
)
