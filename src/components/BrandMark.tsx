type BrandMarkProps = {
  variant: 'hero' | 'compact';
  decorative?: boolean;
};

const logoSource = `${import.meta.env.BASE_URL}assets/sai-charan-logo.webp`;

export function BrandMark({ variant, decorative = false }: BrandMarkProps) {
  return (
    <span
      className={`brand-mark brand-mark--${variant}`}
      aria-hidden={decorative ? 'true' : undefined}
    >
      <span className="brand-mark__plate" aria-hidden="true" />
      <img
        src={logoSource}
        alt={decorative ? '' : 'Sai Charan emblem'}
        width="1100"
        height="1100"
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        fetchPriority={variant === 'hero' ? 'high' : 'auto'}
      />
      <span className="brand-mark__rim" aria-hidden="true" />
      <span className="brand-mark__signal" aria-hidden="true" />
    </span>
  );
}
