"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("132da70f-9523-4c3c-8c85-ab99e1f60f7c");
  }, []);

  return null;
};