import React from 'react'
import { IconProps } from './types'

const IconSelectToSpeakSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131Zm-80-29L280-360H120v-240h160l200-200v640Zm80-160v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320Zm-160-34v-252l-86 86H200v80h114l86 86ZM40-680v-240h240v80H120v160H40ZM680-40v-80h160v-160h80v240H680ZM300-480Z" />
  </svg>
)

export { IconSelectToSpeakSharp as default }