import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavDropdown } from './menu-components';

const restApiMenuItems = () => (
  <>
    <MenuItem icon="cogs" to="/admin/metrics">
      Transfers by block
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/health">
      Transfers by block/hash
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/configuration">
      Transfers by wallet
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      Transfers for NFT
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      Transfers by contract
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      Search NFTs
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      NFTs by wallet
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      NFT metadata
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      Collection metadata
    </MenuItem>
    <MenuItem icon="cogs" to="/nftmetadata">
      NFTs by Collection
    </MenuItem>
    <MenuItem icon="cogs" to="/nftbyaddress">
      Collections by wallet
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      NFT owners by contract
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      NFT owners by contract/tokenid
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/logs">
      Floor price by contract
    </MenuItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
  </>
);

export const RestApiMenu = () => (
  <NavDropdown icon="users-cog" name="REST API" id="restapi-menu" data-cy="restapiMenu">
    {restApiMenuItems()}
  </NavDropdown>
);

export default RestApiMenu;
