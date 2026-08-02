import type { Metadata } from "next";
import { RelationshipHubClient } from "@/components/relationship-hub/relationship-hub-client";

export const metadata: Metadata = {
  title: "Source One Relationship Hub",
  description: "A compact relationship-focused contact manager for Source One Home Loans.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RelationshipHubPage() {
  return <RelationshipHubClient />;
}
