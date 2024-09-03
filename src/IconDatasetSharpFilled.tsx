import React from 'react'
import { IconProps } from './types'

const IconDatasetSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm160-400h160v-160H280v160Zm240 0h160v-160H520v160ZM280-280h160v-160H280v160Zm240 0h160v-160H520v160Z" />
  </svg>
)

export { IconDatasetSharpFilled as default }
