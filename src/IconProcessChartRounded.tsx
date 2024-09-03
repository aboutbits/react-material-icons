import React from 'react'
import { IconProps } from './types'

const IconProcessChartRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M96-240q-15-8-20.5-23.5T78-294l204-408q8-15 23.5-20.5T336-720q15 8 20.5 23.5T354-666L150-258q-8 15-23.5 20.5T96-240Zm264 0q-15-8-20.5-23.5T342-294l204-408q8-15 23.5-20.5T600-720q15 8 20.5 23.5T618-666L414-258q-8 15-23.5 20.5T360-240Zm264 0q-15-8-20.5-23.5T606-294l204-408q8-15 23.5-20.5T864-720q15 8 20.5 23.5T882-666L678-258q-8 15-23.5 20.5T624-240Z" />
  </svg>
)

export { IconProcessChartRounded as default }