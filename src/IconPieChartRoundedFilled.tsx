import React from 'react'
import { IconProps } from './types'

export const IconPieChartRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-520v-356q143 15 241.5 114T876-520H520ZM441-85q-152-15-254.5-128T84-480q0-155 102.5-268T441-876v791Zm79 0v-356h356q-14 143-113.5 242.5T520-85Z" />
  </svg>
)
