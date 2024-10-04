import React from 'react'
import { IconProps } from './types'

const IconTimer3Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-120h240v-100H360v-120h200v-100H320v-120h360v220l-60 60 60 60v220H320Z" />
  </svg>
)

export { IconTimer3Sharp as default }
