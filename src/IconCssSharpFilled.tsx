import React from 'react'
import { IconProps } from './types'

const IconCssSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-360v-80h60v20h80v-40H380v-140h200v80h-60v-20h-80v40h140v140H380Zm260 0v-80h60v20h80v-40H640v-140h200v80h-60v-20h-80v40h140v140H640Zm-520 0v-240h200v80h-60v-20h-80v120h80v-20h60v80H120Z" />
  </svg>
)

export { IconCssSharpFilled as default }
