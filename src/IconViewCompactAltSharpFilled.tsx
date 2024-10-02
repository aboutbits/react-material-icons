import React from 'react'
import { IconProps } from './types'

export const IconViewCompactAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-300h160v-160H300v160Zm0-200h160v-160H300v160Zm200 200h160v-160H500v160Zm0-200h160v-160H500v160ZM80-160v-640h800v640H80Z" />
  </svg>
)
