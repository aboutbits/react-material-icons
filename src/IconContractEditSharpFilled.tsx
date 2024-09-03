import React from 'react'
import { IconProps } from './types'

const IconContractEditSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80H240q-50 0-85-35t-35-85v-120h120v-560h600v280l-80 80v-280H320v480h240l-80 80v160Zm80 0v-123l263-262 122 123L683-80H560ZM360-480v-80h360v80H360Zm0-120v-80h360v80H360Zm463 296 37-39-37-37-38 38 38 38Z" />
  </svg>
)

export { IconContractEditSharpFilled as default }
