

export interface IProjectProps {
    company_name: string;
    job_type: string;
    start_date: string;
    end_date: string;
    role?: string;
    location?: string;
    project_url: string;
    job_description: string[];
};

export interface IProjectData {
    data: IProjectProps[]
}