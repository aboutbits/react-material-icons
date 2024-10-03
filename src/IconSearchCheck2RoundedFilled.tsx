import React from 'react'
import { IconProps } from './types.js'

export const IconSearchCheck2RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m358-532-57-56q-12-12-28-12t-28 12q-12 12-12.5 28t11.5 28l85 85q12 12 28.5 12t28.5-12l170-169q12-12 12-28.5T556-673q-12-12-28.5-12T499-673L358-532Zm42 292q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 105.5T653-364l199 199q12 12 12 28.5T852-108q-12 12-28.5 12T795-108L596-307q-41 32-90.5 49.5T400-240Z" />
  </svg>
)
