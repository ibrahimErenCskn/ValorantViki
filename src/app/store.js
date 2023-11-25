import { configureStore } from '@reduxjs/toolkit'
import agentsSlice  from './getValorantApi'

export const store = configureStore({
  reducer: {
    agents : agentsSlice
  },
})