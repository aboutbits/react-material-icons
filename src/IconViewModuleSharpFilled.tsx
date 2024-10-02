import React from 'react'
import { IconProps } from './types'

export const IconViewModuleSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M627-500v-260h213v260H627Zm-253 0v-260h213v260H374Zm-253 0v-260h213v260H121Zm0 300v-260h213v260H121Zm253 0v-260h213v260H374Zm253 0v-260h213v260H627Z" />
  </svg>
)
