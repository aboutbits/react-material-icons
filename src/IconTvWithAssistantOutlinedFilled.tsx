import React from 'react'
import { IconProps } from './types'

export const IconTvWithAssistantOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-460q17 0 28.5-11.5T460-500q0-17-11.5-28.5T420-540q-17 0-28.5 11.5T380-500q0 17 11.5 28.5T420-460Zm120 0q17 0 28.5-11.5T580-500q0-17-11.5-28.5T540-540q-17 0-28.5 11.5T500-500q0 17 11.5 28.5T540-460Zm-240 0q17 0 28.5-11.5T340-500q0-17-11.5-28.5T300-540q-17 0-28.5 11.5T260-500q0 17 11.5 28.5T300-460Zm360 0q17 0 28.5-11.5T700-500q0-17-11.5-28.5T660-540q-17 0-28.5 11.5T620-500q0 17 11.5 28.5T660-460ZM160-120v-80q-33 0-56.5-23.5T80-280v-440q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v440q0 33-23.5 56.5T800-200v80h-40l-26-80H227l-27 80h-40Z" />
  </svg>
)
