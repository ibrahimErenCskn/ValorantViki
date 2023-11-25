import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from './status';

const initialState = {
    allAgents: [],
    allAgentsStatus : STATUS.IDLE,
    agentDetail: [],
    agentDetailStatus: STATUS.IDLE,
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : "tr-TR"
}

export const getAgents = createAsyncThunk('getagents', async(language) =>{
  const response = await fetch(`https://valorant-api.com/v1/agents?language=${language}&isPlayableCharacter=true`);
  const data = await response.json();
  return data;
})
export const getAgentDetail = createAsyncThunk('getagentdetail', async(arr) =>{
  const response = await fetch(`https://valorant-api.com/v1/agents/${arr[0]}?language=${arr[1]}`);
  const data = await response.json();
  return data;
})

export const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    changeLanguage: (state,action) =>{
      state.lang = action.payload
      localStorage.setItem('lang',action.payload);
    }
  },
  extraReducers: (builder) =>{
    builder
    .addCase(getAgents.pending,(state, action) => {
        state.allAgentsStatus = STATUS.LOADING
    })
    .addCase(getAgents.fulfilled, (state,action)=>{
        state.allAgentsStatus = STATUS.SUCCESS
        state.allAgents = action.payload
    })
    .addCase(getAgents.rejected, (state, action) => {
        state.allAgentsStatus = STATUS.FAIL
    })
    .addCase(getAgentDetail.pending,(state, action) => {
      state.agentDetailStatus = STATUS.LOADING
    })
    .addCase(getAgentDetail.fulfilled, (state,action)=>{
        state.agentDetailStatus = STATUS.SUCCESS
        state.agentDetail = action.payload
    })
    .addCase(getAgentDetail.rejected, (state, action) => {
        state.agentDetailStatus = STATUS.FAIL
    })
  }
})


export const {changeLanguage } = agentsSlice.actions
export default agentsSlice.reducer
