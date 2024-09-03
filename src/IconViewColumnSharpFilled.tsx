import React from 'react'
import { IconProps } from './types'

const IconViewColumnSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-560h213v560H120Zm253 0v-560h213v560H373Zm253 0v-560h213v560H626Z" />
  </svg>
)

export { IconViewColumnSharpFilled as default }
