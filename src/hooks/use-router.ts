/** @format */

import { Href, Redirect, usePathname, useRouter } from "expo-router";

export default () => {
  const router = useRouter();
  const pathname = usePathname();

  const redirect = (href: Href) => {    
    return () => {
      router.navigate("/text-field")
    };
  };

  const isMatch = (path: string) => {
    return pathname === path;
  };

  return { redirect, isMatch };
};