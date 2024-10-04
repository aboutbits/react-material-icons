import React from 'react'
import { IconProps } from './types.js'

export const IconPlumbingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M771-593 630-734l-85 84-85-84 113-114q12-12 27-17.5t30-5.5q16 0 30.5 5.5T686-848l85 85q18 17 26.5 39.5T806-678q0 23-8.5 45T771-593ZM220-409q-18-18-18-42.5t18-42.5l98-99 85 85-99 99q-17 18-41.5 18T220-409Zm-43 297q-11-12-17-26.5t-6-30.5q0-16 5.5-30.5T177-226l283-282-127-128q-18-17-18-41.5t18-42.5q17-18 42-18t43 18l127 127 57-57 112 114q12 12 12 28t-12 28q-12 12-28 12t-28-12L290-112q-12 12-26.5 17.5T234-89q-15 0-30-6t-27-17Z" />
  </svg>
)