"use client";

import { Button } from "@/components/ui/button";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold tracking-tight">Algo deu errado!</h2>
          <p className="text-muted-foreground mt-2 mb-4">
            Ocorreu um erro inesperado. Por favor, tente novamente.
          </p>
          <Button
            onClick={() => this.setState({ hasError: false })}
            variant="outline"
          >
            Tentar Novamente
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}