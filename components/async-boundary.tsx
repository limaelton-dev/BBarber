"use client";

import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { ErrorBoundary } from "./error-boundary";

interface AsyncBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

export function AsyncBoundary({
  children,
  fallback,
  errorFallback,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense
        fallback={
          fallback || (
            <div className="flex justify-center p-8">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          )
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}