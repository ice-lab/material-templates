import { defineConfig } from '@ice/pkg';

export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        path: 'packages',
        sidebarItemsGenerator: (args) => {
          // The index.md doc should not be the category, so we rewrite the default isCategoryIndex function.
          function isCategoryIndex({ fileName, directories }) {
            const eligibleDocIndexNames = [
              'readme',
              directories[0].toLowerCase(),
            ];
            return eligibleDocIndexNames.includes(fileName.toLowerCase());
          }
          const defaultSidebarItems = args.defaultSidebarItemsGenerator({
            ...args,
            isCategoryIndex,
          });
          // Remove the `docs` category
          return defaultSidebarItems.map((defaultSideItem) => ({
            ...defaultSideItem,
            items: defaultSideItem.items.map((item) => item.items).flat(),
          }));
        },
        exclude: ['**/node_modules/**'],
      },
    ],
  ],
});
