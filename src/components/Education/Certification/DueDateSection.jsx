import { Clock } from "lucide-solid";

const DueDateSection = ({ dueDate }) => (
  <div class="text-right">
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 rounded-lg">
      <Clock class="w-4 h-4 text-green-400" />
      <span class="text-sm font-semibold text-green-300">
        {dueDate}
      </span>
    </div>
  </div>
);

export default DueDateSection;