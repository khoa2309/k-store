import { Fragment } from "react";
import { Category } from "../Category/page";

export default function SideBar() {
    return (
        <Fragment>
            <p className="uppercase text-lg font-bold">Danh mục</p>
            <Category
                isCollapsed={false}
                links={[
                    {
                        title: "Tất cả",
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
