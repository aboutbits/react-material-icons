import React from 'react'
import { IconProps } from './types'

const IconHowToRegSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M622-144 484-282l56-56 82 82 202-202 56 56-258 258ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm114 52L368-282l122 122H80v-112q0-33 17-62t47-44q51-26 115-44t141-18q30 0 58.5 3t55.5 9Z" />
  </svg>
)

export { IconHowToRegSharpFilled as default }
