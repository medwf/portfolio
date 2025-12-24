import { Calendar, Briefcase, Award, Users } from "lucide-react";

// Stats data with translation keys
export const statsData = [
  {
    translationKey: "yearsLearning",
    value: "3+",
    icon: Calendar,
  },
  {
    translationKey: "projectsCompleted",
    value: "5+",
    icon: Briefcase,
  },
  {
    translationKey: "hackathonsWon",
    value: "3",
    icon: Award,
  },
  {
    translationKey: "techCommunities",
    value: "2",
    icon: Users,
  },
] as const;
