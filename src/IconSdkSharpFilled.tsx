import React from 'react'
import { IconProps } from './types'

const IconSdkSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm392 300-84 84 58 58 142-142-142-142-58 58 84 84Zm-254 0 84-84-58-58-142 142 142 142 58-58-84-84Z" />
  </svg>
)

export { IconSdkSharpFilled as default }
