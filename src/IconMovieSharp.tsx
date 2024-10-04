import React from 'react'
import { IconProps } from './types'

const IconMovieSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h200v640H80Zm80-400v320h640v-320H160Zm0 0v320-320Z" />
  </svg>
)

export { IconMovieSharp as default }
