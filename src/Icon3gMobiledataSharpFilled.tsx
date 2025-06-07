import React from 'react'
import { IconProps } from './types.js'

export const Icon3gMobiledataSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h200v-80H120v-80h200v-80H120v-80h280v400H120Zm720-240v240H480v-400h360v80H560v240h200v-80H660v-80h180Z" />
  </svg>
)
