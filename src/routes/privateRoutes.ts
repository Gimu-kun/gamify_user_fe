export const privateRoutes = [
    {
        path: '/',
        element: "",
        auth: true
    },

    {
        path: '/profile',
        element:"" ,
        auth: true
    },
    {
        path: '/me',
        element: "",
        auth: true
    },
    {
        path: '/user/:id',
        element: "",
        auth: true
    },
    // Trang Thông tin cài đặt bảo mật đổi mật khẩu
    {
        path: '/settings',
        element:"",
        auth: true
    },
    {
         path: '/account/settings',
        element:"",
        auth: true
    }
     

]