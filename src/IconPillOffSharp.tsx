import React from 'react'
import { IconProps } from './types'

export const IconPillOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m694-376-56-56 80-80q20-20 31-47t11-56q0-60-42.5-102.5T615-760q-29 0-56 11t-47 31l-80 80-56-56 80-80q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73l-80 80ZM345-200q29 0 56-11t47-31l77-77-206-206-77 77q-20 20-31 47t-11 56q0 60 42.5 102.5T345-200ZM792-52 581-263l-77 77q-32 32-73 49t-86 17q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l77-77L56-788l56-56 736 736-56 56ZM422-422Zm113-113Z" />
  </svg>
)
