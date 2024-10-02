import React from 'react'
import { IconProps } from './types'

export const IconPianoOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-55-65-65H200q-33 0-56.5-23.5T120-200v-526l-65-65 57-57 736 736-57 57Zm49-179-80-80v-446h-80v340q0 5-1.5 10t-4.5 10L520-554v-206h-80v126L234-840h526q33 0 56.5 23.5T840-760v526Zm-640 34h130v-180h-10q-17 0-28.5-11.5T280-420v-146l-80-80v446Zm190 0h180v-76L438-408q-4 13-14.5 20.5T400-380h-10v180Zm240 0h16l-16-16v16Z" />
  </svg>
)
