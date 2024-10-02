import React from 'react'
import { IconProps } from './types'

export const IconRollerShadesClosedSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-80h80v-640h640v640h80v80H550q0 29-20.5 49.5T480-50q-29 0-49.5-20.5T410-120H80Zm160-240h480v-400H240v400Zm0 160h200v-80H240v80Zm280 0h200v-80H520v80ZM240-760h480-480Z" />
  </svg>
)
