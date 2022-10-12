import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProfileCard } from './index';

storiesOf('Components|organisms/ProfileCard', module)
  .add('normal', () => (
    <ProfileCard
      modifiers="hasavatarborder"
      background="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmVcWKv5Dn5D2nn7ywfeaHjVmwRVE2XmELUYLzdFhkEpx2&h=220"
      avatar="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmYRsPWWXpMm3BBrpe64oG9ZePeAtGBsJgWCUC3p46BXrG&w=240"
      name="FM Gallery"
      asideInfo="ERC-1155"
    />
  ))
  .add('by', () => (
    <ProfileCard
      background="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmVcWKv5Dn5D2nn7ywfeaHjVmwRVE2XmELUYLzdFhkEpx2&h=220"
      avatar="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmSJvPASqCHCDCxnauHijQiqrCnxge9pd42uBz2KtDXfCz&w=240"
      name="FM Gallery"
      by="Sparrow"
    />
  ))
  .add('user', () => (
    <ProfileCard
      modifiers="hasavatarborder"
      background="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTgkSn79ZeaHscoNaonT37e5dkPnDqZG3NhdLDDeEVmFw&h=220"
      avatar="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmRiXMLc7Q8fkKV7Tui1RWbv1eBWejZ7nBPHNxVvq7vFJp&w=240"
      name="ARC"
      followers={123}
    />
  ));
