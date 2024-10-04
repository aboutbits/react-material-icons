import React from 'react'
import { IconProps } from './types.js'

export const IconStreetviewRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-520q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520ZM144-144q-11-11-17.5-25t-6.5-31v-560q0-33 23.5-56.5T200-840h268q-14 27-21 57.5t-7 62.5q0 59 22 109.5t60 88.5L144-144Zm336 24v-216q0-42 25.5-75.5T572-454q35-8 72-12t76-4q32 0 61.5 2.5T840-460v260q0 33-23.5 56.5T760-120H480Z" />
  </svg>
)