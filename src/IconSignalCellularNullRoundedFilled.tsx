import React from 'react'
import { IconProps } from './types.js'

export const IconSignalCellularNullRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v643q0 25-17.5 42.5T820-80H177Zm96-80h527v-526L273-160Z" />
  </svg>
)
