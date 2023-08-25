import { QueryClient } from '@tanstack/react-query';
const queryClientStore = new QueryClient({
  defaultOptions: {
    // 5 * 1000
    queries: {
      staleTime: 0,
    },
  },
});

export default queryClientStore;
