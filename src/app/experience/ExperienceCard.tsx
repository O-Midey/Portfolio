"use client";
import { Card, CardContent } from "../../../components/ui/card";
import { Briefcase } from "lucide-react";
import { Experience } from "../data/experience";
import { motion } from "framer-motion";

export default function ExperienceCard({
  role,
  company,
  period,
  description,
}: Experience) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-2xl shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
            <span className="text-sm text-gray-500">{period}</span>
          </div>
          <p className="text-gray-600 font-medium flex items-center gap-2 mb-4">
            <Briefcase className="h-4 w-4 text-gray-400" />
            {company}
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
