import React from 'react'
import { IconProps } from './types'

const IconSummarizeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM120-120v-720h520l200 200v520H120Zm80-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z" />
  </svg>
)

export { IconSummarizeSharp as default }
