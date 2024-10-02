import React from 'react'
import { IconProps } from './types'

export const IconHighlightSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m226-640-86-84 56-58 86 86-56 56Zm214-120v-120h80v120h-80Zm296 120-58-56 86-84 56 56-84 84ZM360-80v-200L240-400v-200h480v200L600-280v200H360Zm80-80h80v-153l120-120v-87H320v87l120 120v153Zm40-180Z" />
  </svg>
)
