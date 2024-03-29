"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: React.PropsWithChildren) {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}