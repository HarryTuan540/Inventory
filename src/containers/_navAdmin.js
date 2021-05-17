
const _navAdmin =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'HCMUT',
    to: '/kho-hang'
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý xuất nhập kho']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý kho hàng',
    route: '/kho-hang',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tạo mới kho hàng',
        to: '/kho-hang',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Lịch sử thống kê',
    route: '/thongke-xuatkho',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Lịch sử xuất kho',    
        to: '/thongke-xuatkho',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Lịch sử nhập kho',
        to: '/thongke-nhapkho',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thống kê nhập xuất kho',
        to: '/thongke-nhapxuatkho',
      }
    ],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý tài xế',
    route: '/quanly-taixe',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý tài xế',
        to: '/quanly-taixe'
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý thủ kho',
    route: '/quanly-user',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tạo thông tin thủ kho',
        to: '/quanly-user'
      },
    ],
  },
  
]

export default _navAdmin
