import { Badge } from '@/components/ui/badge';

type LanguageBadgeProps = {
    name: string;
};

export default function LanguageBadge({ name }: LanguageBadgeProps) {
    return <Badge>{name}</Badge>;
}
