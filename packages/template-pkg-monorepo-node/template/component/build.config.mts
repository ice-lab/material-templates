import { defineConfig } from '@ice/pkg';

export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        path: 'packages',
        sidebarItemsGenerator: (args: any) => {
          // The index.md doc should not be the category, so we rewrite the default isCategoryIndex function.
          function isCategoryIndex({ fileName, directories }: any) {
            const eligibleDocIndexNames: string[] = [
              'readme',
              directories[0].toLowerCase(),
            ];
            return eligibleDocIndexNames.includes(fileName.toLowerCase());
          }
          const defaultSidebarItems = args.defaultSidebarItemsGenerator({
            ...args,
            isCategoryIndex,
          });
          // 1. Remove the `docs` category.
          // 2. Remove category link.
          const newSidebarItems = defaultSidebarItems.map(({ link, ...rest }: any) => ({
            ...rest,
            items: rest.items.map((item: any) => item.items).flat(),
          }));

          return newSidebarItems;
        },
        exclude: ['**/node_modules/**'],
        onBrokenLinks: 'warn',
        pageRouteBasePath: '/',
      },
    ],
  ],
});
