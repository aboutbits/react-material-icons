import React from 'react'
import { IconProps } from './types.js'

export const IconSentimentDissatisfiedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-420q-54 0-101.5 23.5T302-328q-11 16-3 32t26 16q8 0 14.5-3.5T351-294q23-31 57-48.5t72-17.5q38 0 72 17.5t57 48.5q4 7 10.5 10.5T634-280q18 0 26-16.5t-3-33.5q-29-44-76.5-67T480-420Zm140-100q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)