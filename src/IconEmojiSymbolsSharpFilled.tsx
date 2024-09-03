import React from 'react'
import { IconProps } from './types'

const IconEmojiSymbolsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-800v-80h320v80H120Zm120 280v-160H120v-80h320v80H320v160h-80ZM548-96l-56-56 312-312 56 56L548-96Zm32-224q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Zm200 200q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM620-520q-41 0-70.5-29.5T520-620q0-41 29.5-71.5T620-722q12 0 21.5 1.5T660-716v-164h180v80H720v180q0 41-29.5 70.5T620-520ZM220-80q-41 0-70.5-30.5T120-182q0-18 7.5-36.5T150-252l42-42-14-14q-15-15-22.5-32.5T148-378q0-41 29.5-70.5T248-478q41 0 70.5 29.5T348-378q0 20-6.5 37.5T320-308l-14 14 28 28 56-56 56 58-56 56 56 56-56 56-56-56-42 42q-15 15-33.5 22.5T220-80Zm28-270 14-14q3-3 4.5-6t1.5-8q0-9-6-14.5t-14-5.5q-8 0-14 5.5t-6 14.5q0 3 1.5 7t4.5 7l14 14Zm-30 190q3 0 8-1.5t8-4.5l44-42-28-28-44 42q-3 3-4.5 7t-1.5 9q0 8 5 13t13 5Z" />
  </svg>
)

export { IconEmojiSymbolsSharpFilled as default }
