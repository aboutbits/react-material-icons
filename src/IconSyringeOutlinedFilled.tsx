import React from 'react'
import { IconProps } from './types'

const IconSyringeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M156-513q-11-12-11-28.5t11-28.5l112-112-43-43-12 12q-12 12-28.5 12T156-713q-11-12-11-28.5t11-27.5l80-80q12-12 28.5-12t28.5 12q12 11 12 28t-12 28l-12 12 43 43 112-112q12-12 28.5-12t28.5 12q12 12 12 28.5T493-793l-27 26 62 62-113 112q-11 12-11 28.5t11 28.5q12 12 28.5 12t28.5-12l112-113 61 60-113 113q-12 12-12 28.5t12 28.5q11 11 27.5 10.5T588-420l112-113 61 61q23 23 23 56.5T761-359l-28 29 189 188H808L676-274l-28 29q-23 23-56.5 23T535-245L240-540l-27 27q-12 11-28.5 11T156-513Z" />
  </svg>
)

export { IconSyringeOutlinedFilled as default }
