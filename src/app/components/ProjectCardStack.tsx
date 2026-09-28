import { Children, type ReactNode } from "react";

export default function ProjectCardStack({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) {
  return (
    <div className="project-card-stack">
      {Children.map(children, (child, index) => (
        <div
          className={`project-card-stack-item w-full ${itemClassName}`}
          style={{
            // Long lists need a bounded offset to keep the active card visible.
            top: `calc(var(--project-stack-top) + min(${index} * var(--project-stack-step), 64px))`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
