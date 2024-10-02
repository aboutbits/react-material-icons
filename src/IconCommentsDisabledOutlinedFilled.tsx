import React from 'react'
import { IconProps } from './types'

export const IconCommentsDisabledOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 607-240H160q-33 0-56.5-23.5T80-320v-447l-53-53 57-57L876-85l-57 57Zm61-167L675-400h45v-80H595l-40-40h165v-80H475l-40-40h285v-80H355L195-880h605q33 0 56.5 23.5T880-800v605ZM240-400h207l-80-80H240v80Zm0-120h87l-80-80h-7v80Z" />
  </svg>
)
