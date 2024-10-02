import React from 'react'
import { IconProps } from './types'

export const IconSnippetFolderOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm420-180v-200h55l65 65v135H580Zm-60 60h240v-220L660-600H520v320Z" />
  </svg>
)
