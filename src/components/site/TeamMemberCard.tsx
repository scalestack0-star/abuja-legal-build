import { UserRound, Linkedin } from "lucide-react";

export type TeamMember = {
  name: string;
  title: string;
  practiceAreas: string;
  biography: string;
  qualifications: string;
  profileUrl?: string;
  photo?: string;
};

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col border border-border bg-card">
      <div className="flex aspect-[4/5] items-center justify-center border-b border-border bg-ivory">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <div className="px-6 text-center">
            <UserRound
              className="mx-auto size-10 text-navy/25"
              strokeWidth={1}
              aria-hidden="true"
            />
            <p className="mt-4 text-xs tracking-wide text-muted-foreground">
              [Photograph to be supplied]
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg text-navy">{member.name}</h3>
        <p className="mt-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-gold-dark uppercase">
          {member.title}
        </p>
        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="text-xs tracking-wide text-muted-foreground uppercase">
              Practice areas
            </dt>
            <dd className="text-charcoal/80">{member.practiceAreas}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted-foreground uppercase">
              Qualifications
            </dt>
            <dd className="text-charcoal/80">{member.qualifications}</dd>
          </div>
        </dl>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {member.biography}
        </p>
        {member.profileUrl ? (
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-navy hover:text-gold-dark"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            View profile
          </a>
        ) : (
          <p className="mt-5 text-xs text-muted-foreground">[Profile link pending]</p>
        )}
      </div>
    </article>
  );
}
