"use client";

import { ReactNode, useEffect, useState } from "react";
import LoaderComponent from "./LoaderComponent.component";

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

  return <>{loading ? <LoaderComponent /> : children}</>;
};

export default Loader;
