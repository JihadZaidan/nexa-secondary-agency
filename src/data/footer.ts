interface FooterProps {
    url: string;
    label: string;
    hideInNavbar?: boolean;
    published?: boolean;
}

export const footer : FooterProps[] = [
    {
        url: "/awards",
        label: "Awards",
        hideInNavbar: true,
        published: false,
    },
    {
        url: "/brands",
        label: "Brands",
        published: true,
    },
    {
        url: "/brands",
        label: "Careers",
        published: true,
    },
    {
        url: "/inquiries",
        label: "Inquiries",
        published: true,
    },
    {
        url: "/contact-us",
        label: "Contact Us",
        published: true,
    }
] 