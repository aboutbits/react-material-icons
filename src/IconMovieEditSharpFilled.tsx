import React from 'react'
import { IconProps } from './types'

const IconMovieEditSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v44L480-276v116H80Zm480 40v-123l263-262 123 122-263 263H560Zm263-224 37-39-37-37-38 38 38 38Z" />
  </svg>
)

export { IconMovieEditSharpFilled as default }
