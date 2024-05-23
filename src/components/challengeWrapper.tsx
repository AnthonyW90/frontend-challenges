export default function ChallengeWrapper({
  children,
  maxWidth = "320px",
  offset = "0",
}: {
  children: React.ReactNode;
  maxWidth?: string;
  offset?: string;
}) {
  return (
    <div className="w-full fixed left-0" style={{ top: offset }}>
      <div className="mx-auto" style={{ maxWidth }}>
        {children}
      </div>
      ;
    </div>
  );
}
