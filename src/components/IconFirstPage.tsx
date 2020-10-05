import React from 'react'
import { IconProps } from './types'
const IconFirstPage: React.FC<IconProps> = (props: IconProps): any => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
    <path d="M24 24H0V0h24v24z" fill="none" />
  </svg>
)

export { IconFirstPage }
