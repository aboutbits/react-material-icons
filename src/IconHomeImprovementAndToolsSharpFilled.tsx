import React from 'react'
import { IconProps } from './types'

const IconHomeImprovementAndToolsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-880h480L600-712v152H360v-152L240-880Zm120 400h240v80H360v-80Zm0 160h240v120L480-80 360-200v-120Z" />
  </svg>
)

export { IconHomeImprovementAndToolsSharpFilled as default }
