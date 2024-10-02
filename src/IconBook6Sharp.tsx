import React from 'react'
import { IconProps } from './types'

export const IconBook6Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm0-240h360v-480H240q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2Zm30-100h48l26-72h113l25 72h48L425-700h-50L270-420Zm88-112 41-116h2l41 116h-84ZM200-313v-487 487Z" />
  </svg>
)
