"use client";
import { useState } from 'react';
import Sidebar from '../../app/components/admin/Sidebar';
import CoursesPage from '../../app/components/admin/CoursesPage';
import BlogPage from '../../app/components/admin/BlogPage';
import ContactsPage from '../../app/components/admin/ContactsPage';
import PasswordPage from '../../app/components/admin/PasswordPage';

type Page = 'courses' | 'blog' | 'contacts' | 'password';

export default function AdminPanelPage() {
  const [activePage, setActivePage] = useState<Page>('courses');

  const renderPage = () => {
    switch (activePage) {
      case 'courses': return <CoursesPage />;
      case 'blog': return <BlogPage />;
      case 'contacts': return <ContactsPage />;
      case 'password': return <PasswordPage />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 p-10 bg-gray-50">{renderPage()}</div>
    </div>
  );
}
