import { useEffect, useLayoutEffect } from "react";

/**
 * This custom effect hook is necessary because of ssr of nextjs.
 * The hook useLayoutEffect is not available on ssr.
 */
const useCustomEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useCustomEffect;
