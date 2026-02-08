"use client";
import React from 'react';
import { Button, Tooltip } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <Tooltip title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}>
            <Button
                type="text"
                icon={themeMode === 'light' ? <MoonOutlined  style={{
                    fontSize: 20,
                    color: "#1890FF",
                  }} /> : <SunOutlined  style={{
                    fontSize: 20,
                    color: "#FAAD14",
                  }}/>}
                onClick={toggleTheme}
                aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
            />
        </Tooltip>
    );
};

export default ThemeToggle;