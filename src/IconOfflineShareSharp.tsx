import React from 'react'
import { IconProps } from './types'

const IconOfflineShareSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-40v-720h80v640h400v80H160Zm160-160v-720h480v720H320Zm80-120v40h320v-40H400Zm0-80h320v-320H400v320Zm40-80v-130h126l-28-28 42-42 100 100-100 100-42-42 28-28h-66v70h-60Zm-40-320h320v-40H400v40Zm0 0v-40 40Zm0 480v40-40Z" />
  </svg>
)

export { IconOfflineShareSharp as default }
