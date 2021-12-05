// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { expandEndpoints } from './util';

export const mainnetEndPoints = [
  'wss://rpc.setheum.xyz',
  // 'wss://slixon-tech-rpc.setheum.xyz/setheum/aaa-bbb',
  // 'wss://al-sharif-rpc.setheum.xyz/setheum/aaa-bbb'
];

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// alphabetical based on chain name
export function createProduction (t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [
    {
      info: 'setheum',
      text: t('rpc.setheum.network', 'Setheum Mainnet', { ns: 'apps-config' }),
      providers: {
        'Setheum': mainnetEndPoints[0],
        // 'Slixon Technologies': newromeEndPoints[1],
        // AlSharif: newromeEndPoints[2]
      }
    }
  ], firstOnly, withSort);
}
