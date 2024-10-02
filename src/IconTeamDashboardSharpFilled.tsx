import React from 'react'
import { IconProps } from './types'

export const IconTeamDashboardSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-120v-330H120v330h280Zm80 0h360v-330H480v330ZM120-530h720v-310H120v310Z" />
  </svg>
)
