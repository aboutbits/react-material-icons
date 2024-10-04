import React from 'react'
import { IconProps } from './types.js'

export const IconSportsScoreRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM240-160q-17 0-28.5-11.5T200-200v-560q0-17 11.5-28.5T240-800q17 0 28.5 11.5T280-760v40h80v80h-80v80h80v80h-80v280q0 17-11.5 28.5T240-160Zm360-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z" />
  </svg>
)