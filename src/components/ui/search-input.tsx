import React from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ ...props }) => {
        return (
            <div className="relative flex items-center max-w-2xl ">
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                <Input {...props} className=" pl-8" />
            </div>
        );
    },
);

SearchInput.displayName = 'Search';

export default SearchInput;
