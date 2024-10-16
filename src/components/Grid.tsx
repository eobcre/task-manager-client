import { useMediaQuery } from 'react-responsive';
// import Button from './Button';

interface Task {
  _id: string;
  userId: number;
  userName: string;
  taskName: string;
  documentType: string;
  createdAt: string;
}

interface GridProps {
  data: Task[];
}

const Grid: React.FC<GridProps> = ({ data }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {isMobile ? (
        <div className='border border-slate-500 rounded-md'>
          {data.map((cell) => (
            <div key={cell._id} className='flex border-b border-slate-300 last:border-b-0'>
              <div className='flex flex-col gap-2 bg-purple text-white font-bold p-4'>
                <div>Task</div>
                <div>Assigned By</div>
                <div>Document Type</div>
                <div>Date</div>
              </div>
              <div className='flex flex-col gap-2 p-4'>
                <div>{cell.taskName}</div>
                <div>{cell.userName}</div>
                <div>{cell.documentType}</div>
                <div>{new Date(cell.createdAt).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='border border-slate-500 rounded-md w-full min-h-auto'>
          {/* header row */}
          <div className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr] text-white font-bold bg-purple rounded-t border-b border-slate-400 opacity-90 p-4'>
            <div>Task</div>
            <div>Assigned By</div>
            <div>Document Type</div>
            <div>Date</div>
            {/* <div></div> */}
          </div>
          {/* data row */}
          {data.map((cell) => (
            <div key={cell._id} className='col-span-4 grid grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr] text-dark bg-white last:rounded-b-md border-b last:border-b-0 border-slate-300 p-4'>
              <div>{cell.taskName}</div>
              <div>{cell.userName}</div>
              <div>{cell.documentType}</div>
              <div>{new Date(cell.createdAt).toLocaleDateString()}</div>
              {/* <div>
            <Button buttonName='View' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-1' />
          </div> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Grid;
