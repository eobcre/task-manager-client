import { useState, useEffect } from 'react';
import ServerClient from '../services/ServerClient';
import useLoginStore from '../store/useLoginStore';
import Grid from '../components/Grid';
import Tab from '../components/Tab';
import Button from '../components/Button';
import AssignTask from './AssignTask';

interface Assignee {
  userId: number;
  username: string;
}

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('My Tasks');
  const [assignTaskOpen, setAssignTaskOpen] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [assignedTaskData, setAssignedTaskData] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const [selectedAssignee, setSelectedAssignee] = useState<Assignee | null>(null);
  const [description, setDescription] = useState('');
  const { userId, userName, flag } = useLoginStore();

  const fetchTaskData = async () => {
    try {
      const serverClient = new ServerClient('/api/retrieveTasks');
      const res = await serverClient.post({ userId });
      console.log('res', res.data);
      setTaskData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchAssignedTaskData = async () => {
    try {
      const serverClient = new ServerClient('/api/retrieveAssignedTasks');
      const res = await serverClient.post({ userId });
      console.log('fetchAssignedTaskData res', res.data);
      setAssignedTaskData(res.data);
    } catch (error) {
      console.error('Error fetching assigned task data:', error);
    }
  };

  useEffect(() => {
    if (activeTab === 'My Tasks') {
      fetchTaskData();
    } else if (activeTab === 'Assigned') {
      fetchAssignedTaskData();
    }
  }, [activeTab]);

  // assign task button
  const handleClickAssignTask = () => {
    setAssignTaskOpen(true);
  };

  // assign submission
  const onSubmit = async () => {
    try {
      const serverClient = new ServerClient('/api/assignTasks');
      await serverClient.post({ userId, userName, taskName: selectedTask, documentType: selectedDocumentType, assignTo: selectedAssignee, description, flag });
      // console.log('res', res.data);
      if (activeTab === 'My Tasks') {
        fetchTaskData();
      } else if (activeTab === 'Assigned') {
        fetchAssignedTaskData();
      }
      // reset
      setAssignTaskOpen(false);
      setSelectedTask('');
      setSelectedDocumentType('');
      setSelectedAssignee(null);
      setDescription('');
    } catch (error) {
      console.error('Error', error);
    }
  };

  // task radio
  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('handleChangeTask', e.target.value);
    setSelectedTask(e.target.value);
  };
  // document type radio
  const handleChangeDocumentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('handleChangeDocumentType', e.target.value);
    setSelectedDocumentType(e.target.value);
  };
  // description
  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log('handleChangeDescription', e.target.value);
    setDescription(e.target.value);
  };

  return (
    <div className='p-14'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-medium py-4'>Tasks Management</h1>
          <Button buttonName='Assign Task' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2' buttonClick={handleClickAssignTask} />
        </div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'My Tasks' && <Grid data={taskData} />}
        {activeTab === 'Assigned' && <Grid data={assignedTaskData} />}
      </div>
      {assignTaskOpen && (
        <AssignTask
          onSubmit={onSubmit}
          selectedTask={selectedTask}
          description={description}
          selectedDocumentType={selectedDocumentType}
          setSelectedAssignee={setSelectedAssignee}
          handleChangeTask={handleChangeTask}
          handleChangeDocumentType={handleChangeDocumentType}
          handleChangeDesc={handleChangeDesc}
        />
      )}
    </div>
  );
};

export default Tasks;
