import React from 'react'
import { IconProps } from './types.js'

export const IconPulmonologySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120H80v-287l132-353h188v160h-80v-80h-52L160-393v193h200v-120h80v200Zm440 0H520v-200h80v120h200v-193L692-680h-52v80h-80v-160h188l132 353v287ZM348-428Zm264 0Zm-132-76L376-400l-56-56 120-120v-304h80v304l120 120-56 56-104-104Z" />
  </svg>
)
