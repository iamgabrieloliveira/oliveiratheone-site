import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function removeDuplicates<T>(arr: T[]): T[] {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}
