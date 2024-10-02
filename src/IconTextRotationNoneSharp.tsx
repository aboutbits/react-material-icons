import React from 'react'
import { IconProps } from './types'

export const IconTextRotationNoneSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200v-80h528l-42-42 56-56 138 138-138 138-56-56 42-42H160Zm116-200 164-440h80l164 440h-76l-38-112H392l-40 112h-76Zm138-176h132l-64-182h-4l-64 182Z" />
  </svg>
)
