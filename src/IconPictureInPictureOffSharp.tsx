import React from 'react'
import { IconProps } from './types.js'

export const IconPictureInPictureOffSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M634-440h126v-240H440v46l80 80v-46h160v80H554l80 80Zm166 166v-446H354l-80-80h606v606l-80-80ZM383-463Zm194-34ZM818-28 686-160H80v-640h80l80 80h-80v480h446L26-820l57-57L875-85l-57 57Z" />
  </svg>
)
