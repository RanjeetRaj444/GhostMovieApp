"use client";

import { useEffect, useRef } from "react";
import { ADS_ENABLED, ADSENSE_CLIENT } from "@/lib/config";
import styles from "./AdSlot.module.scss";

/**
 * A single AdSense display unit.
 *
 * Renders NOTHING until NEXT_PUBLIC_ADS_ENABLED=true (set this only after
 * your site is approved). Pass the ad unit `slot` id you create in AdSense.
 * Placing these now means the layout is ready — flip the flag to go live.
 */
export default function AdSlot({ slot, format = "auto", className = "" }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADS_ENABLED || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* adsbygoogle not ready yet */
    }
  }, [slot]);

  if (!ADS_ENABLED || !slot) return null;

  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      <span className={styles.label}>Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
