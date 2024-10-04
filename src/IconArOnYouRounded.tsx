import React from 'react'
import { IconProps } from './types'

const IconArOnYouRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-800q134 0 227 93t93 227q0 134-93 227t-227 93q-134 0-227-93t-93-227q0-134 93-227t227-93Zm0 560q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM340-560q0 17 11.5 28.5T380-520q17 0 28.5-11.5T420-560q0-17-11.5-28.5T380-600q-17 0-28.5 11.5T340-560Zm200 0q0 17 11.5 28.5T580-520q17 0 28.5-11.5T620-560q0-17-11.5-28.5T580-600q-17 0-28.5 11.5T540-560ZM40-760v-80q0-33 23.5-56.5T120-920h80q17 0 28.5 11.5T240-880q0 17-11.5 28.5T200-840h-80v80q0 17-11.5 28.5T80-720q-17 0-28.5-11.5T40-760ZM200-40h-80q-33 0-56.5-23.5T40-120v-80q0-17 11.5-28.5T80-240q17 0 28.5 11.5T120-200v80h80q17 0 28.5 11.5T240-80q0 17-11.5 28.5T200-40Zm640 0h-80q-17 0-28.5-11.5T720-80q0-17 11.5-28.5T760-120h80v-80q0-17 11.5-28.5T880-240q17 0 28.5 11.5T920-200v80q0 33-23.5 56.5T840-40Zm0-720v-80h-80q-17 0-28.5-11.5T720-880q0-17 11.5-28.5T760-920h80q33 0 56.5 23.5T920-840v80q0 17-11.5 28.5T880-720q-17 0-28.5-11.5T840-760ZM480-480Zm0 140q38 0 70.5-18t52.5-49q6-11-.5-22T583-440H377q-13 0-19.5 11t-.5 22q20 31 52.5 49t70.5 18Z" />
  </svg>
)

export { IconArOnYouRounded as default }
