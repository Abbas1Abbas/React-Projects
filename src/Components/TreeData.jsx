const menus = [
    {
        label: "Home",
    },
    {
        label: "Profile",
        children: [
            {
                label: "Details",
                children: [
                    {
                        label: "Location",
                        to: "location",
                    },
                ],
            },
        ],
    },
    {
        label: "Setting",
        children: [
            {
                label: "Account",
            },
            {
                label: "Security",
                children: [
                    {
                        label: "Login",
                    },
                    {
                        label: "Register",
                    },
                ],
            },
        ],
    },
];

export default menus;