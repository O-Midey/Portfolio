interface PropertyItemProps {
  value: string;
  icon: string; // only string now
}

const PropertyItem = ({ value, icon }: PropertyItemProps) => (
  <div className="flex items-center text-xs gap-2 text-gray-700">
    <span>{icon}</span>
    <span>{value}</span>
  </div>
);

export default PropertyItem;
