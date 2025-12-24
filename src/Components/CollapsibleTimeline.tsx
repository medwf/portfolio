import { useState } from "react";
import { ChevronDown, Github } from "lucide-react";

interface TimelineItem {
    title: string;
    repo?: string;
}

interface CollapsibleTimelineProps {
    title: string;
    tags: TimelineItem[];
}

export function CollapsibleTimeline({ tags, title }: CollapsibleTimelineProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentId = `timeline-content-${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="mt-4 ml-3">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1 -ml-2"
                aria-expanded={isExpanded}
                aria-controls={contentId}
            >
                <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
                <span className="gradient-text text-[1rem]">{title}</span>
                <span className="text-xs text-muted-foreground">
                    {tags?.length}
                </span>
            </button>

            <div
                id={contentId}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ?
                    'max-h-500 opacity-100 mt-4' :
                    'max-h-0 opacity-0'
                    }`}
                role="region"
                aria-labelledby="timeline-button"
            >
                <div className="flex flex-wrap gap-4 justify-start ml-4">
                    {tags?.map((tag, index) => (
                        <span
                            key={`${tag?.title}-${index}`}
                            className="px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-[0.85rem] font-medium inline-flex items-center gap-2 transition-all duration-300 hover:bg-secondary/20 hover:scale-105"
                        >
                            {tag.repo && (
                                <a
                                    href={`https://github.com/medwf${tag.repo}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                                    aria-label={`View ${tag.title} on GitHub`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                            )}
                            {tag.title}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
