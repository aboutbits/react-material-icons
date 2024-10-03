import React from 'react'
import { IconProps } from './types.js'

export const IconNoDrinksOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80h200v-206L56-791l56-57 736 736-57 57-271-271v126h200v80H240Zm352-362-57-55 56-63H473l-79-80h268l72-80H314l-80-80h606v80L592-482Zm-88-87Z" />
  </svg>
)
