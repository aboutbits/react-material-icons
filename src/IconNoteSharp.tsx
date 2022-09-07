import React from 'react'
import { IconProps } from './types'

const IconNoteSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 10l-6-6H2v16h20V10zm-7-4.5l5.5 5.5H15V5.5z" />
  </svg>
)

export { IconNoteSharp as default }
