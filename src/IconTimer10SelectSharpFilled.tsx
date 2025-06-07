import React from 'react'
import { IconProps } from './types.js'

export const IconTimer10SelectSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-320h120v-320H400v320ZM280-200v-560h360v560H280Zm-160 0v-440H40v-120h200v560H120Zm560 0v-80h160v-40H680v-200h240v80H760v40h160v200H680Z" />
  </svg>
)
