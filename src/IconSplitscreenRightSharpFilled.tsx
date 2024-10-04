import React from 'react'
import { IconProps } from './types'

const IconSplitscreenRightSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120v-720h320v720H520Zm-400 0v-720h320v720H120Zm80-640v560h160v-560H200Z" />
  </svg>
)

export { IconSplitscreenRightSharpFilled as default }
