import {
  TeamOutlined,
  AppstoreOutlined,
  ApiOutlined,
  TableOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  HomeOutlined
} from '@ant-design/icons';

const ComPage = ({ name }) => {
  return <h1>This is '{name}' Page</h1>;
};
const AppMenuConfig = [
  {
    path: '/',
    name: 'Home',
    element: <ComPage name="Home" />,
    icon: () => <HomeOutlined />
  },
  {
    name: 'Users',
    icon: () => <TeamOutlined />,
    subMenu: [
      {
        path: '/users',
        name: 'Active Users',
        element: <ComPage name="Active Users" />,
        icon: () => <TeamOutlined />
      },
      {
        path: '/staged_users',
        name: 'Staged Users',
        element: <ComPage name="Staged Users" />,
        icon: () => <TeamOutlined />
      }
    ]
  },
  {
    name: 'System',
    icon: () => <TeamOutlined />,
    subMenu: [
      {
        name: 'Log',
        path: '/system/logs',
        element: <ComPage name="Log" />,
        icon: () => <TeamOutlined />
      },
      {
        name: 'Resource',
        path: '/system/resources',
        element: <ComPage name="Resource" />,
        icon: () => <TeamOutlined />
      }
    ]
  }
];

export { AppMenuConfig };
