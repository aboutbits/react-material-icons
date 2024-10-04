import React from 'react'
import { IconProps } from './types'

const IconViewQuiltSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M373-500v-260h467v260H373Zm254 300v-260h213v260H627Zm-254 0v-260h214v260H373Zm-253 0v-560h213v560H120Z" />
  </svg>
)

export { IconViewQuiltSharpFilled as default }
