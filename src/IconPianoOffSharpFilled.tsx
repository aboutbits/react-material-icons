import React from 'react'
import { IconProps } from './types.js'

export const IconPianoOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-55-65-65H120v-606l-65-65 57-57 736 736-57 57Zm49-179-80-80v-446h-80v366L520-554v-206h-80v126L234-840h606v606Zm-640 34h130v-180h-50v-186l-80-80v446Zm190 0h180v-76L438-408v28h-48v180Zm240 0h16l-16-16v16Z" />
  </svg>
)
