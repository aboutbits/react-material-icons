import React from 'react'
import { IconProps } from './types'

const IconUnfoldMoreRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7c-.39-.39-1.02-.39-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12 18.17z" />
  </svg>
)

export { IconUnfoldMoreRounded as default }
