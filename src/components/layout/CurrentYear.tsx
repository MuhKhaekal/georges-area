"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 0;
}

export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    getYear,
    getServerYear,
  );

  return <>{year === 0 ? "—" : year}</>;
}