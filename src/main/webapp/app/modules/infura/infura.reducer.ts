import axios, {AxiosResponse} from 'axios';
import {Storage} from 'react-jhipster';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {serializeAxiosError} from '../../shared/reducers/reducer.utils';

const initialState = {
  nftMetadata: {}
};

export type InfuraState = Readonly<typeof initialState>;

export interface NftMetadataResponse {
  contract : string;
  tokenId : string;
  name : string;
  description : string;
  image : string;
}

export const getInfura = createAsyncThunk('infura/getNftMetadata', async (tokenAddress: string) => {
    const response = axios.get<any>(`/api/infura/nft/nfts/0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e/tokens/7421`);
    return response;
  },
  {
    serializeError: serializeAxiosError,
  });

export const InfuraSlice = createSlice({
  name: 'nftMetadata',
  initialState: initialState as InfuraState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(getInfura.fulfilled, (state, action) => {
      state.nftMetadata = action.payload.data;
    });
  }
});

export const {reset} = InfuraSlice.actions;

// Reducer
export default InfuraSlice.reducer;
