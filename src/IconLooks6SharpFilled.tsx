import React from 'react'
import { IconProps } from './types'

const IconLooks6SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-520v-80h120v-80H360v400h240v-240H440Zm0 80h80v80h-80v-80ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconLooks6SharpFilled as default }
