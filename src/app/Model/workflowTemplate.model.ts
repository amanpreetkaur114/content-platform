export class WorkflowTemplate{
    id: number;
    title: string;
    description: string;
  steps: [
    {
      stepId: number,
      title: string,
      description: string,
      stepType: string,
      sequence: string,
      durationDays: string,
      assignTo: string,
      approvers: string
    }
  ]
}