import React from 'react'
import { IconProps } from './types.js'

export const IconMovieOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h80l640 640H80Zm800-35L274-800h66l67 133 27 27h106l-80-160h100l80 160h120l-80-160h200v605ZM791-55 55-791l57-57 736 736-57 57Z" />
  </svg>
)
