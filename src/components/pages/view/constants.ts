export const ViewTabs = ['Info', 'Comment', 'History'] as const;
export type ViewTabType = typeof ViewTabs[number];
export const ViewMyitemTabs = ['Created Items', 'On sale', 'Bought Items', 'Sold Items'] as const;
export type ViewMyitemTabsType = typeof ViewMyitemTabs[number];
export const ViewMyitemTabsNFT = ['Single NFT(721)', 'Multiple NFT(1155)'] as const;
export type ViewMyitemTabsTypeNFT = typeof ViewMyitemTabsNFT[number];
