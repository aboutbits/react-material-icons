import React from 'react'
import { IconProps } from './types'

export const IconAirlineSeatLegroomNormalSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-280H240v-440h240v240h280v360h120v120H640Zm-80-160H120v-560h80v480h360v80Z" />
  </svg>
)
