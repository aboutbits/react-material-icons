import React from 'react'
import { IconProps } from './types'

export const Icon4kPlusSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-400h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60Zm-200 40h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240Zm-120 0h60v-60h40v-60h-40v-120h-60v120h-60v-120h-60v180h120v60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
)
