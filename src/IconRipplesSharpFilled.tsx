import React from 'react'
import { IconProps } from './types'

export const IconRipplesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M542-760q-11 18-16.5 38.5T520-680q0 66 47 113t113 47q21 0 41.5-5.5T760-542v-218H542ZM120-120v-720h720v720H120Z" />
  </svg>
)
