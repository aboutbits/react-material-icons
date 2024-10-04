import React from 'react'
import { IconProps } from './types'

const IconLineStyleRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M159-160q-17 0-28-11.5T120-200q0-17 12-28.5t29-11.5q17 0 28 11.5t11 28.5q0 17-12 28.5T159-160Zm160 0q-17 0-28-11.5T280-200q0-17 12-28.5t29-11.5q17 0 28 11.5t11 28.5q0 17-12 28.5T319-160Zm160 0q-17 0-28-11.5T440-200q0-17 11.5-28.5T480-240q17 0 28.5 11.5T520-200q0 17-12 28.5T479-160Zm161 0q-17 0-28.5-11.5T600-200q0-17 12-28.5t29-11.5q17 0 28 11.5t11 28.5q0 17-11.5 28.5T640-160Zm160 0q-17 0-28.5-11.5T760-200q0-17 11.5-28.5T800-240q17 0 28.5 11.5T840-200q0 17-11.5 28.5T800-160ZM159-320q-17 0-28-11.5T120-360q0-17 11.5-28.5T160-400h121q17 0 28 11.5t11 28.5q0 17-11.5 28.5T280-320H159Zm260 0q-17 0-28-11.5T380-360q0-17 11.5-28.5T420-400h121q17 0 28 11.5t11 28.5q0 17-11.5 28.5T540-320H419Zm260 0q-17 0-28-11.5T640-360q0-17 11.5-28.5T680-400h121q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-320H679ZM159-480q-17 0-28-11.5T120-520q0-17 11.5-28.5T160-560h241q17 0 28 11.5t11 28.5q0 17-11.5 28.5T400-480H159Zm400 0q-17 0-28-11.5T520-520q0-17 11.5-28.5T560-560h241q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-480H559ZM160-640q-17 0-28.5-11.5T120-680v-80q0-17 11.5-28.5T160-800h640q17 0 28.5 11.5T840-760v80q0 17-11.5 28.5T800-640H160Z" />
  </svg>
)

export { IconLineStyleRounded as default }
