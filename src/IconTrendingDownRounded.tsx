import React from 'react'
import { IconProps } from './types'

const IconTrendingDownRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.85 17.15l1.44-1.44-4.88-4.88-3.29 3.29c-.39.39-1.02.39-1.41 0l-6-6.01c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L9.41 12l3.29-3.29c.39-.39 1.02-.39 1.41 0l5.59 5.58 1.44-1.44c.31-.31.85-.09.85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84z" />
  </svg>
)

export { IconTrendingDownRounded as default }
