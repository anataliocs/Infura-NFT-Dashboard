import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Nftmetadata from "app/modules/nftmetadata/nftmetadata";

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`/nftmetadata`} component={Nftmetadata} />
  </div>
);

export default Routes;
