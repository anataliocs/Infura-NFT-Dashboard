import axios, {AxiosResponse} from 'axios';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {serializeAxiosError} from '../../shared/reducers/reducer.utils';

const initialState = {
  nftMetadata: {}
};

export type NftMetadataState = Readonly<typeof initialState>;

export interface NftsCreatedByCollectionResponse {
  pageNumber: string;
  network: string;
  total: string;
  account: string;
  type: string;
  assets: NftMetadataResponse[];
}

export interface NftMetadataResponse {
  contract : string;
  tokenId : string;
  type : string;
  metadata : NftMetadataDetailsResponse;
}

export interface NftMetadataDetailsResponse {
  name : string;
  description : string;
  image : string;
  animation_url : string;
  ipfsHash : string;
}

export const getNftMetaData = createAsyncThunk('infura/getNftMetadata', async (tokenAddress: string) => {
    const response = axios.get<NftsCreatedByCollectionResponse>(`/api/infura/nft/${tokenAddress}/tokens`);
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
