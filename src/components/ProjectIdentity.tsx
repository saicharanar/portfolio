type ProjectIdentityProps = {
  name: string;
  detail: string;
};

export function ProjectIdentity({ name, detail }: ProjectIdentityProps) {
  return (
    <div className="project-identity">
      <span className="project-identity__copy">
        <strong>{name}</strong>
        <small>{detail}</small>
      </span>
    </div>
  );
}
