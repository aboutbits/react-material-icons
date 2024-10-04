import React from 'react'
import { IconProps } from './types'

const IconDocumentScannerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-720v-200h200v80H160v120H80Zm720 0v-120H680v-80h200v200h-80ZM80-40v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680ZM200-160v-640h560v640H200Zm160-400h240v-80H360v80Zm0 120h240v-80H360v80Zm0 120h240v-80H360v80Z" />
  </svg>
)

export { IconDocumentScannerSharpFilled as default }
