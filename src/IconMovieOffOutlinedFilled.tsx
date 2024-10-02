import React from 'react'
import { IconProps } from './types'

export const IconMovieOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l640 640H160Zm711-44L274-800h66l67 133 27 27h106l-80-160h100l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 10-2 19t-7 17ZM791-55 55-791l57-57 736 736-57 57Z" />
  </svg>
)
