import React from 'react'
import { IconProps } from './types'

const IconThumbsUpDownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M12 5H5.82l.78-3.78L5.38 0 0 5.38V14h9.24L12 7.54zm2.76 5L12 16.46V19h6.18l-.78 3.78L18.62 24 24 18.62V10z" />
  </svg>
)

export { IconThumbsUpDownSharp as default }
