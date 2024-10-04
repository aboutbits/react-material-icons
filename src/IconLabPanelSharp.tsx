import React from 'react'
import { IconProps } from './types'

const IconLabPanelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-360h80v-171H80v-189h360v189h-40v171h160v-171h-40v-189h360v189h-40v171h80v360H40Zm560-600h200v-40H600v40Zm-440 0h200v-40H160v40Zm480 240h120v-160H640v160Zm-440 0h120v-160H200v160Zm-80 280h720v-200H120v200Zm40-520v-40 40Zm440 0v-40 40ZM120-200v-200 200Z" />
  </svg>
)

export { IconLabPanelSharp as default }
