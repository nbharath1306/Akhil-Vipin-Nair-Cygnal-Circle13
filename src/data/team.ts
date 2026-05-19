import { TeamMember } from "./types";
import bharath from "./bharath";
import akhil from "./akhil";

const teamMembers: Record<string, TeamMember> = {
  bharath,
  akhil,
};

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(teamMembers);
}
