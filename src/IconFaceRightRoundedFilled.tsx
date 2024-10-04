import React from 'react'
import { IconProps } from './types.js'

export const IconFaceRightRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M620-480q-17 0-28.5-11.5T580-520q0-17 11.5-28.5T620-560q17 0 28.5 11.5T660-520q0 17-11.5 28.5T620-480Zm-200 0q-17 0-28.5-11.5T380-520q0-17 11.5-28.5T420-560q17 0 28.5 11.5T460-520q0 17-11.5 28.5T420-480Zm380-80q0 72-28.5 132.5T694-322q-16 14-32 12t-27-13q-11-11-11.5-27t13.5-28q38-33 60.5-80T720-560q0-11-1-21t-3-21q-74 8-143-16.5T452-696q-38 52-93.5 86T240-565q-2 56 21 104t62 82q14 13 13.5 29T325-323q-11 11-27 13t-32-12q-49-45-77.5-105.5T160-560q0-134 93-227t227-93q134 0 227 93t93 227ZM487-160H360q-17 0-28.5-11.5T320-200q0-17 11.5-28.5T360-240h127l-35-35q-11-12-11.5-28.5T452-332q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L508-68q-12 12-28 12t-28-12q-12-12-11.5-28.5T452-125l35-35Z" />
  </svg>
)