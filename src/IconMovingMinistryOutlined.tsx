import React from 'react'
import { IconProps } from './types'

const IconMovingMinistryOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-720h560v720H360v-160h-80v160H40Zm80-80h80v-160h240v160h80v-560H120v560Zm80-240h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm420 260-56-56 43-44H640v-80h127l-43-44 56-56 140 140-140 140ZM200-200v-160h240v160-160H200v160Z" />
  </svg>
)

export { IconMovingMinistryOutlined as default }