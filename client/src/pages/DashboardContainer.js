import React, { useState } from 'react';
import SidebarLinks from '../components/SidebarLinks';
import AddBook from '../components/pages/AddBook';
import MyStudents from '../components/pages/MyStudents';
import Profile from '../components/pages/Profile';
import ReadingLog from '../components/pages/ReadingLog';
import Dashboard from '../components/pages/Dashboard';
import readingWorm from "../images/CA101-3.png"

export default function DashboardContainer() {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    // This method is checking to see what the va¸lue of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'readinglog') {
            return <ReadingLog />;
        }
        if (currentPage === 'addbook') {
            return <AddBook />;
        }
        if (currentPage === 'mystudents') {
            return <MyStudents />;
        }
        if (currentPage === 'profile') {
            return <Profile />;
        }
        return <Dashboard />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="flex flex-no-wrap">
            {/* Sidebar */}
            <div className="w-64 absolute bg-dark shadow h-screen sm:relative flex-col justify-between hidden sm:flex">
                <div className="px-8">
                    <ul className="mt-4">
                        <SidebarLinks currentPage={currentPage} handlePageChange={handlePageChange} />
                    </ul>
                    <img className="h-28 mt-8 ml-2 flex items-center" src={readingWorm} alt='watercolor of bookworm reading a book' />
                </div>
            </div>

            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                <div className="ml-0 m:ml: w-full h-full rounded border-dashed border-2 border-gray-300">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}
