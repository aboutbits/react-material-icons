import React from 'react'
import { IconProps } from './types'

const IconCheerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m312-751-40-120 56-18 40 119-56 19Zm138-49v-120h60v120h-60Zm198 49-56-19 40-119 56 19-40 119ZM874-40l12-79-236-36-41-131 19-42 32 100 76-24-99-310 7-3 171 325h105v-80h-56L676-675l-135 75 51 160-69 148 66 209 285 43ZM660-228l-68-212 68 212Zm76-24ZM86-40l-12-79 235-36 42-131-20-42-31 100-76-24 98-310-6-3-172 325H40v-80h56l188-355 135 75-51 160 69 148-67 209L86-40Zm214-188 68-212-68 212Zm-76-24Z" />
  </svg>
)

export { IconCheerSharp as default }
