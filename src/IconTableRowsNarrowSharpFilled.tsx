import React from 'react'
import { IconProps } from './types'

export const IconTableRowsNarrowSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-340h720v-100H120v100Zm0-180h720v-100H120v100Zm0-180h720v-100H120v100Zm720 580v-720 720Zm-720-40h720v-100H120v100Z" />
  </svg>
)
