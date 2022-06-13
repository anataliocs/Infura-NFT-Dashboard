import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Nftbyaddress from "app/modules/nftbyaddress/nftbyaddress";

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`/nftbyaddress`} component={Nftbyaddress} />
  </div>
);

export default Routes;
