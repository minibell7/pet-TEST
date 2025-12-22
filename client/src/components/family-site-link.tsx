import { ExternalLink } from "lucide-react";

export function FamilySiteLink() {
  return (
    <div className="w-full py-4 flex justify-center items-center bg-background/80 backdrop-blur-sm border-t border-border/50">
      <a
        href="https://kr.mini-bell.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
      >
        <span>Family Site: kr.mini-bell.com</span>
        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}
