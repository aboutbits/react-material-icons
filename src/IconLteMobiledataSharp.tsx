import React from 'react'
import { IconProps } from './types'

const IconLteMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-320v-320h80v240h120v80H160Zm280 0v-240h-80v-80h240v80h-80v240h-80Zm200 0v-320h200v80H720v40h120v80H720v40h120v80H640Z" />
  </svg>
)

export { IconLteMobiledataSharp as default }
