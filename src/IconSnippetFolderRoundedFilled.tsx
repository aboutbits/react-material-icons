import React from 'react'
import { IconProps } from './types'

const IconSnippetFolderRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm420-180v-200h55l65 65v135H580Zm-20 60h160q17 0 28.5-11.5T760-320v-163q0-8-3-15.5t-9-13.5l-76-76q-6-6-13.5-9t-15.5-3h-83q-17 0-28.5 11.5T520-560v240q0 17 11.5 28.5T560-280Z" />
  </svg>
)

export { IconSnippetFolderRoundedFilled as default }
