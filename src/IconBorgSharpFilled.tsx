import React from 'react'
import { IconProps } from './types'

const IconBorgSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-91 120-275v-165h200v120h120v229ZM120-520v-165l320-184v229H320v120H120Zm280 120v-160h160v160H400ZM520-91v-229h120v-120h200v165L520-91Zm120-429v-120H520v-229l320 184v165H640Z" />
  </svg>
)

export { IconBorgSharpFilled as default }
