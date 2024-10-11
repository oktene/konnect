"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

function withPermission(Component: React.ComponentType, requiredPermission: string) {
  return function ProtectedComponent(props: any) {
    const { user, hasPermission, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && (!user || !hasPermission(requiredPermission))) {
        router.push("/unauthorized");
      }
    }, [user, isLoading, hasPermission, router]);

    if (isLoading || !user || !hasPermission(requiredPermission)) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}

export default withPermission;