import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication from './authentication';
import applicationProfile from './application-profile';
import nftmetadata from 'app/modules/nftmetadata/nftmetadata.reducer';
import nftbyaddress from "app/modules/nftbyaddress/nftbyaddress.reducer";

import administration from 'app/modules/administration/administration.reducer';
import entitiesReducers from 'app/entities/reducers';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer: ReducersMapObject = {
  authentication,
  applicationProfile,
  administration,
  loadingBar,
  nftmetadata,
  nftbyaddress,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  ...entitiesReducers,
};

export default rootReducer;
