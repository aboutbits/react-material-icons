import React from 'react'
import { IconProps } from './types'

const IconViewCarousel: React.FC<IconProps> = ({
  title = 'IconViewCarousel',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
  </svg>
)

export { IconViewCarousel as default }
