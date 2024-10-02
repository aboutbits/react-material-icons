import React from 'react'
import { IconProps } from './types'

export const IconEnhancedEncryptionSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-320v120h80v-120h120v-80H520v-120h-80v120H320v80h120ZM160-80v-560h120v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h120v560H160Zm80-80h480v-400H240v400Zm120-480h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
  </svg>
)
