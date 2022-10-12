export const ViewTabs = ['Info', 'Comment', 'History'] as const;
export type ViewTabType = typeof ViewTabs[number];
export const ViewMyitemTabs = ['Created Items', 'On sale', 'Bought Items', 'Sold Items'] as const;
export type ViewMyitemTabsType = typeof ViewMyitemTabs[number];
