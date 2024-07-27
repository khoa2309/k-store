import { MyDropdownMenu } from "../DropdownMenu/page";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
    return (
        <div className="h-20 bg-gradient flex justify-center gap-4">
            <ModeToggle />
            <MyDropdownMenu />
        </div>
    );
}
