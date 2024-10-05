import React from 'react';

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className='flex gap-10 border-b border-gray-300 my-10'>
      <div
        onClick={() => {
          setActiveTab('My Tasks');
        }}
        className={`font-bold ${activeTab === 'My Tasks' ? 'text-dark border-b-4 border-purple cursor-pointer pb-1' : 'border-transparent'}`}
      >
        <a href='#MyTasks'>My Tasks</a>
      </div>
      <div
        onClick={() => {
          setActiveTab('Assigned');
        }}
        className={`font-bold ${activeTab === 'Assigned' ? 'text-dark border-b-4 border-purple cursor-pointer pb-1' : 'border-transparent'}`}
      >
        <a href='#Assigned'>Assigned</a>
      </div>
    </div>
  );
};

export default Tab;
