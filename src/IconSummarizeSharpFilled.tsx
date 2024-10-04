import React from 'react'
import { IconProps } from './types'

const IconSummarizeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM120-120v-720h520l200 200v520H120Zm480-640v160h160L600-760Z" />
  </svg>
)

export { IconSummarizeSharpFilled as default }
