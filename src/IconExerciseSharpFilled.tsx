import React from 'react'
import { IconProps } from './types.js'

export const IconExerciseSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M839-599 597-841l74-74 246 247-78 69ZM290-48 48-290l72-72 242 242-72 72Zm173-56L104-463l113-115 92 92 166-166-91-91 113-115 361 361-115 113-91-91-166 166 92 92-115 113Z" />
  </svg>
)
