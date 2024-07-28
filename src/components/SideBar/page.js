import { Fragment } from "react";
import { Category } from "../Category/page";

export default function SideBar() {
    return (
        <Fragment>
            <p className="uppercase text-lg font-bold mb-5">Category</p>
            <Category
                isCollapsed={false}
                links={[
                    {
                        title: "All",
                        variant: "default",
                    },
                    {
                        title: "Nike",
                        variant: "ghost",
                    },
                    {
                        title: "Balenciaga",
                        variant: "ghost",
                    },
                    {
                        title: "Adidas",
                        variant: "ghost",
                    },
                    {
                        title: "Vans",
                        variant: "ghost",
                    },
                ]}
            />
        </Fragment>
    );
}
