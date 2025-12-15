import DueDateSection from "./DueDateSection";
import IconSection from "./IconSection";
import ProgressBar from "./ProgressBar";
import SkillsTags from "./SkillsTags";

const CertificationCard = ({ cert }) => (
    <div
      class={`group relative ${cert.bgColor} rounded-2xl p-6 md:p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15 backdrop-blur-sm overflow-hidden`}
    >
      <div class="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Icon Section */}
        <IconSection cert={cert} />
        
        {/* Content Section */}
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p class="text-blue-200 font-medium mb-2">
                {cert.provider}
              </p>
              <p class="text-blue-100/70">{cert.description}</p>
            </div>
            <DueDateSection dueDate={cert.dueDate} />
          </div>
  
          {/* Skills Tags */}
          <SkillsTags skills={cert.skills} color={cert.color} />
          
          {/* Progress Bar */}
          <ProgressBar progress={cert.progress} color={cert.color} />
        </div>
      </div>
    </div>
  );

  export default CertificationCard;