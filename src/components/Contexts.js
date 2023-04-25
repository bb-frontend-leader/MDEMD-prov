import { createContext } from 'react';

export default function Context() {}

const GameContext = createContext(null);
const DeckContext = createContext(null);

export { GameContext, DeckContext };
