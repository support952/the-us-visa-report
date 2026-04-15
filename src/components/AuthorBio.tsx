import { User, Link as LinkIcon, Mail } from "lucide-react";
import type { Author } from "@/lib/articles";

const authorBios: Record<string, string> = {
  "Sarah Mitchell": "Senior Immigration Analyst with over 14 years of experience covering U.S. immigration policy. Former legislative analyst for the Senate Judiciary Committee's Immigration Subcommittee. J.D., Georgetown University Law Center.",
  "James Thornton": "Chief Immigration Correspondent and former foreign service officer with the U.S. Department of State. Firsthand consular experience in Diversity Visa processing. M.A. International Relations, Johns Hopkins SAIS.",
  "Elena Rodriguez": "Immigration Policy Reporter covering USCIS operations and humanitarian programs. Former AP immigration correspondent. M.P.P., Harvard Kennedy School. 2023 National Press Foundation award recipient.",
  "Michael Chen": "Consular Affairs Analyst specializing in visa processing and global mobility. Former policy advisor, International Organization for Migration. M.P.A., Columbia SIPA.",
};

export default function AuthorBio({ author }: { author: Author }) {
  const bio = authorBios[author.name] || `${author.role} at The US Visa Report.`;

  return (
    <div className="border-t border-ink mt-12 pt-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-paper-warm border border-rule flex items-center justify-center flex-shrink-0">
          <User size={20} strokeWidth={1.5} className="text-ink-faint" />
        </div>
        <div>
          <p className="text-[8px] font-sans text-ink-muted uppercase tracking-[0.25em]">About the Author</p>
          <h4 className="font-serif text-[15px] font-bold text-ink mt-0.5">{author.name}</h4>
          <p className="text-[10px] font-sans font-medium text-crimson-text tracking-wide">{author.role}</p>
          <p className="text-[12px] font-sans text-ink-soft mt-1.5 leading-relaxed">{bio}</p>
          <div className="flex items-center gap-2.5 mt-2.5">
            <button className="text-ink-faint hover:text-ink transition-colors" aria-label="Profile"><LinkIcon size={11} strokeWidth={1.5} /></button>
            <button className="text-ink-faint hover:text-ink transition-colors" aria-label="Email"><Mail size={11} strokeWidth={1.5} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
