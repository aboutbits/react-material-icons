import React from 'react'
import { IconProps } from './types.js'

export const IconVariableAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-400h720v123q-10-2-19.5-2.5T800-560q-100 0-170 70t-70 170q0 11 .5 20.5T563-280H120Zm640 120v-120H640v-80h120v-120h80v120h120v80H840v120h-80Z" />
  </svg>
)
