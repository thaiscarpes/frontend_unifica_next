export function Title({
  text,
  subtext,
  hasText,
}: {
  text: string;
  subtext?: string;
  hasText?: boolean;
}) {
  return (
    <div className="p-4">
      {hasText && <span className="text-sm text-surface-500">{subtext}</span>}
      <h2 className="text-surface-800 font-bold text-base leading-none">
        {text}
      </h2>
    </div>
  );
}
