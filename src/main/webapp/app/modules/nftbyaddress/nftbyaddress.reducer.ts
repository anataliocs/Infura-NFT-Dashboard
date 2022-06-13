import axios, {AxiosResponse} from 'axios';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {serializeAxiosError} from '../../shared/reducers/reducer.utils';

const initialState = {
  nftByAddress: {}
};

export type NftByAddressState = Readonly<typeof initialState>;

export interface OwnedNftsResponse {
  network : string;
  pageNumber : string;
  total : string;
  account : string;
  type : string;
}

export interface OwnedNftsAsset{
  contract : string;
  tokenId : string;
  supply : string;
  type : string;
}

export interface OwnedNftAssetMetadata{
  name : string;
  description : string;
  external_link : string;
  image : string;
}

export const getNftByAddress = createAsyncThunk('infura/getNftByAddress', async (accountAddress: string) => {
    const response = axios.get<OwnedNftsResponse>(`/api/infura/nft/nfts/${accountAddress}`);
    return response;
  },
  {
    serializeError: serializeAxiosError,
  });

export const NftByAddressSlice = createSlice({
  name: 'nftByAddress',
  initialState: initialState as NftByAddressState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(getNftByAddress.fulfilled, (state, action) => {
      state.nftByAddress = action.payload.data;
    });
  }
});

export const {reset} = NftByAddressSlice.actions;

// Reducer
export default NftByAddressSlice.reducer;
