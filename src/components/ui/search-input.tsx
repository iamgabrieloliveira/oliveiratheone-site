import React from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }) => {
        return (
            <div className={cn('relative flex items-center', className)}>
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                <Input {...props} className=" pl-8" />
            </div>
        );
    },
);

SearchInput.displayName = 'Search';

export default SearchInput;
