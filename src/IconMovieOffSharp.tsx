import React from 'react'
import { IconProps } from './types'

const IconMovieOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h80l240 240H160v320h560l80 80H80Zm800-35-80-80v-285H514L274-800h66l67 133 27 27h106l-80-160h100l80 160h120l-80-160h200v605ZM791-55 55-791l57-57 736 736-57 57ZM446-400Zm211-18Z" />
  </svg>
)

export { IconMovieOffSharp as default }
