import { section } from "../types/types";

export default function NavItem({
  section,
  isActive,
}: {
  section: section;
  isActive: boolean;
}) {
  const Icon = section.icon;
  return (
    <div
      className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all duration-200 ${
        isActive
          ? "bg-gray-100 text-gray-900 font-medium"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <Icon size={16} />
      <span className="text-sm">{section.label}</span>
    </div>
  );
}
