"use client";

import { ReactNode, useEffect, useState } from "react";

const Loader = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-white dark:bg-dark">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
