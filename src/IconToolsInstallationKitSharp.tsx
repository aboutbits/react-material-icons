import React from 'react'
import { IconProps } from './types.js'

export const IconToolsInstallationKitSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160q-134 0-227-93T40-480q0-134 93-227t227-93h240q134 0 227 93t93 227q0 134-93 227t-227 93H360Zm0-80h240q100 0 170-70t70-170q0-100-70-170t-170-70H360q-100 0-170 70t-70 170q0 100 70 170t170 70Zm120-160q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm-80-200h160v-80H400v80Zm0 320h160v-80H400v80Zm200-120h80v-160h-80v160Zm-320 0h80v-160h-80v160Zm200-80Z" />
  </svg>
)
