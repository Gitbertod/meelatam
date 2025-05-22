import { useState } from 'react';
import './App.css';
import { Menu } from 'antd';
import LogoMee from '../components/logoMee/LogoMee';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import NavBar from '../components/navbar/NavBar';


function App() {
  const [current, setCurrent] = useState('mail');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const { SubMenu, ItemGroup: MenuItemGroup, Item: MenuItem } = Menu;

  return (
    <>
     
        <NavBar></NavBar>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <div>
        
      </div>  
        <MenuItem key="mail" icon={<MailOutlined />}>
          Navigation One
        </MenuItem>
        
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:1">Option 1</MenuItem>
            <MenuItem key="setting:2">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:3">Option 3</MenuItem>
            <MenuItem key="setting:4">Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </MenuItem>
      </Menu>
    </>
  );
}

export default App;
