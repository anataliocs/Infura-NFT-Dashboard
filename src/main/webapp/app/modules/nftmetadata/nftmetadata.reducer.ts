import axios, {AxiosResponse} from 'axios';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {serializeAxiosError} from '../../shared/reducers/reducer.utils';

const initialState = {
  nftMetadata: {}
};

export type NftMetadataState = Readonly<typeof initialState>;

export interface NftMetadataResponse {
  contract : string;
  tokenId : string;
  name : string;
  description : string;
  image : string;
}

export const getNftMetaData = createAsyncThunk('infura/getNftMetadata', async (tokenAddress: string) => {
    const response = axios.get<NftMetadataResponse>(`/api/infura/nft/${tokenAddress}/tokens/1`);
    return response;
  },
  {
    serializeError: serializeAxiosError,
  });

export const NftMetadataSlice = createSlice({
  name: 'nftMetadata',
  initialState: initialState as NftMetadataState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(getNftMetaData.fulfilled, (state, action) => {
      state.nftMetadata = action.payload.data;
    });
  }
});

export const {reset} = NftMetadataSlice.actions;

// Reducer
export default NftMetadataSlice.reducer;
