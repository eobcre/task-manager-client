import { nanoid } from 'nanoid';

export interface AssignTaskProps {
  id: string;
  taskName: string;
}

export interface DocumentTypeProps {
  id: string;
  documentType: string;
}

export const assignTaskData: AssignTaskProps[] = [
  {
    id: nanoid(),
    taskName: 'Review',
  },
  {
    id: nanoid(),
    taskName: 'Approval',
  },
  {
    id: nanoid(),
    taskName: 'Others',
  },
];

export const assignDocumentTypeData: DocumentTypeProps[] = [
  {
    id: nanoid(),
    documentType: 'Application',
  },
  {
    id: nanoid(),
    documentType: 'Document',
  },
  {
    id: nanoid(),
    documentType: 'Others',
  },
];
