import React from 'react'
import { IconProps } from './types'

export const IconBungalowOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-248l-44 70-68-42 312-500 312 500-68 42-44-70v248H280Zm80-80h80v-120h80v120h80v-296L480-688 360-496v296Zm80-200v-80h80v80h-80Zm-80 200h240-240Z" />
  </svg>
)
