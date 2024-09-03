import React from 'react'
import { IconProps } from './types'

const IconLabPanelSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-360h80v-171H80v-189h360v189h-40v171h160v-171h-40v-189h360v189h-40v171h80v360H40Zm600-360h120v-160H640v160Zm-440 0h120v-160H200v160Z" />
  </svg>
)

export { IconLabPanelSharpFilled as default }
