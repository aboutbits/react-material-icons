import React from 'react'
import { IconProps } from './types'

export const IconThumbsUpDownSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-400v-344l216-216 49 49-33 151h248v103L371-400H0ZM744 0l-49-49 33-151H480v-103l109-257h371v344L744 0Z" />
  </svg>
)
