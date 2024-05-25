import React from "react";

interface IJobData{
    job: string;
};

interface IProjectProps {
    company_name: string;
    job_type: string;
    start_date: string;
    end_date: string;
    job_description:  IJobData[]
};

interface IProjectData {
    data: IProjectProps[]
}

const data = [
    // {company_name: '', job_type: '', start_date: '', end_date: '', job_description: []}
]

const Project: React.FC<IProjectData> = ({data}) => {
    return (
        <div>
            {data?.map((userData, index) => (
                <div key={index} className="border-b-4 border-black/50 py-5">
                    <h2 className="text-[15px] font-extrabold tracking-normal leading-[17px]">{userData?.company_name}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-[#5446F1] underline font-semibold leading-3 tracking-normal mt-2 mb-3">{userData?.job_type}</p>
                        <p className="text-xs font-semibold leading-3 tracking-normal mt-2 mb-3">{userData?.start_date} – {userData?.end_date}</p>
                    </div>
                    {userData?.job_description?.map((job, index) => (
                        <ul key={index} className="list-disc pl-3.5">
                            <li className="text-sm tracking-normal leading-4 text-left mt-2">{job.job}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Project;