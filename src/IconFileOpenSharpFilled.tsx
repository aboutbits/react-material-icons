import React from 'react'
import { IconProps } from './types'

const IconFileOpenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M878-65 760-183v89h-80v-226h226v80h-90l118 118-56 57ZM520-600h200L520-800v200ZM160-80v-800h400l240 240v240H600v320H160Z" />
  </svg>
)

export { IconFileOpenSharpFilled as default }
