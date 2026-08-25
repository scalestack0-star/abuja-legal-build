import {
  Briefcase,
  Landmark,
  Building2,
  Users,
  UserCheck,
  Banknote,
  FileText,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Briefcase,
  Landmark,
  Building2,
  Users,
  UserCheck,
  Banknote,
  FileText,
  MessagesSquare,
};

export function PracticeAreaIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Briefcase;
  return <Icon className={className} strokeWidth={1.25} aria-hidden="true" />;
}
