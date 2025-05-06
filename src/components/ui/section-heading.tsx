import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-6",
      centered && "text-center",
      className
    )}>
      <h2 className="text-xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-white max-w-2xl  mx-auto font-bold">{subtitle}</p>
      )}
    </div>
  );
}