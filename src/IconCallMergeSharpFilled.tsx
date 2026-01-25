import React from 'react'
import { IconProps } from './types.js'

export const IconCallMergeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m296-160-56-56 200-200v-269L337-582l-57-57 200-200 201 201-57 57-104-104v301L296-160Zm368 1L536-286l57-57 127 128-56 56Z" />
  </svg>
)
