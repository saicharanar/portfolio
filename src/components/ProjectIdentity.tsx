type ProjectIdentityProps = {
  name: string;
  detail: string;
};

export function ProjectIdentity({ name, detail }: ProjectIdentityProps) {
  return (
    <div className="project-identity">
      <strong>{name}</strong>
      <span>{detail}</span>
    </div>
  );
}
