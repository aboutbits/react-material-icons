import React from 'react'
import { IconProps } from './types'

const IconCrosswordSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80v-240h240v240H360ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640Zm0-280v-240h240v240H640Z" />
  </svg>
)

export { IconCrosswordSharpFilled as default }
