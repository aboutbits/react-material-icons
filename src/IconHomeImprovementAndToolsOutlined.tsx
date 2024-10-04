import React from 'react'
import { IconProps } from './types'

const IconHomeImprovementAndToolsOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-880h480L600-712v512L480-80 360-200v-512L240-880Zm200 320h80v-176l40-64H400l40 64v176Zm80 80h-80v80h80v-80Zm0 240v-80h-80v80l40 40 40-40Zm-40-320Zm0 160Zm0-160Zm0 80Zm0 160Z" />
  </svg>
)

export { IconHomeImprovementAndToolsOutlined as default }
