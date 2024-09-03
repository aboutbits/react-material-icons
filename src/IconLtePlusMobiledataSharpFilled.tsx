import React from 'react'
import { IconProps } from './types'

const IconLtePlusMobiledataSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-320v-320h80v240h120v80H40Zm240 0v-240h-80v-80h240v80h-80v240h-80Zm200 0v-320h200v80H560v40h120v80H560v40h120v80H480Zm320-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconLtePlusMobiledataSharpFilled as default }
