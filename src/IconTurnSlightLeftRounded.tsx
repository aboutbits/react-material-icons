import React from 'react'
import { IconProps } from './types.js'

export const IconTurnSlightLeftRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-160q-17 0-28.5-11.5T520-200v-264L320-664v50q0 17-11.5 28.5T280-574q-17 0-28.5-11.5T240-614v-146q0-17 11.5-28.5T280-800h146q17 0 28.5 11.5T466-760q0 17-11.5 28.5T426-720h-50l201 201q11 11 17 25.5t6 30.5v263q0 17-11.5 28.5T560-160Z" />
  </svg>
)
