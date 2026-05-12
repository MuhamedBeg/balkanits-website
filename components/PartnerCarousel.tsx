"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { partners } from "../data/partners";

const GROUP_SIZE = 3;
const totalGroups = Math.ceil(partners.length / GROUP_SIZE);

export default function PartnerCarousel() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToGroup((groupIndex + 1) % totalGroups);
    }, 7000);

    return () => clearInterval(interval);
  }, [groupIndex]);

  function goToGroup(next: number) {
    if (next === groupIndex) return;

    setLeaving(true);

    setTimeout(() => {
      setGroupIndex(next);
      setLeaving(false);
    }, 500);
  }

  const visiblePartners = partners.slice(
    groupIndex * GROUP_SIZE,
    groupIndex * GROUP_SIZE + GROUP_SIZE
  );

  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "2rem",
            opacity: leaving ? 0 : 1,
            transform: leaving ? "translateX(40px)" : "translateX(0)",
            transition: "opacity 700ms ease, transform 700ms ease",
          }}
        >
          {visiblePartners.map((partner) => (
            <article
              key={partner.pic}
              style={{
                background: "#ffffff",
                border: "1px solid #dbe4f0",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 14px 35px rgba(30, 64, 175, 0.10)",
                minHeight: "440px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "155px",
                  background: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "28px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={240}
                  height={110}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "95px",
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      background: "#eff6ff",
                      color: "#1d4ed8",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {partner.acronym}
                  </span>

                  <span
                    style={{
                      background: "#fef2f2",
                      color: "#dc2626",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {partner.group}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: 800,
                    color: "#08215c",
                    margin: 0,
                  }}
                >
                  {partner.name}
                </h3>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#1d4ed8",
                    fontWeight: 700,
                  }}
                >
                  {partner.country}
                </p>

                <p
                  style={{
                    marginTop: "18px",
                    color: "#475569",
                    lineHeight: "28px",
                    flex: 1,
                  }}
                >
                  {partner.description}
                </p>

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "24px",
                    color: "#1d4ed8",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Visit website →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "28px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToGroup(index)}
            aria-label={`Partner group ${index + 1}`}
            style={{
              height: "10px",
              width: groupIndex === index ? "34px" : "10px",
              borderRadius: "999px",
              border: "none",
              background: groupIndex === index ? "#1d4ed8" : "#cbd5e1",
              cursor: "pointer",
              transition: "all 300ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}