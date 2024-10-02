import React from 'react'
import { IconProps } from './types'

export const IconPianoSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h130v-180h-50v-380h-80v560Zm430 0h130v-560h-80v380h-50v180Zm-240 0h180v-180h-50v-380h-80v380h-50v180Z" />
  </svg>
)
