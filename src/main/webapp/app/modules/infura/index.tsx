import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Infura from "app/modules/infura/infura";

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`/infura`} component={Infura} />
  </div>
);

export default Routes;
