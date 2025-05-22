import React from 'react'
import { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'RESPALDO DE ENERGÍA',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'CALIDAD DE ENERGIA',
  },
  {
    key: 'sub1',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];
const MenuItem = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  
    return (
    <>
    <Divider type="vertical" />
    <br />
    <br />
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode={mode}
      theme={theme}
      items={items}
    />

    </>
  )
}

export default MenuItem