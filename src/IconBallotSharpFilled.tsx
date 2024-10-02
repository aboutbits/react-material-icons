import React from 'react'
import { IconProps } from './types'

export const IconBallotSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80ZM280-520h160v-160H280v160Zm0 240h160v-160H280v160ZM120-120v-720h720v720H120Z" />
  </svg>
)
