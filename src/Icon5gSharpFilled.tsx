import React from 'react'
import { IconProps } from './types'

const Icon5gSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h200v-80H120v-240h280v80H200v80h200v240H120Zm720-240v240H480v-400h360v80H560v240h200v-80H660v-80h180Z" />
  </svg>
)

export { Icon5gSharpFilled as default }
