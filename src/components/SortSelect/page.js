import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function MySelect() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose the sort type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sorted by</SelectLabel>
                    <SelectItem value="liked">Liked</SelectItem>
                    <SelectItem value="sold">Best Sellers</SelectItem>
                    <SelectItem value="desc">Price: Low to High</SelectItem>
                    <SelectItem value="asc">Price: High to Low</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
