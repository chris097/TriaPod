import { IProjectData } from "@/types/project";
import React from "react";

const Project: React.FC<IProjectData> = ({
    data, 
    isProject 
}) => {
    return (
        <div>
            {data?.map((userData, index) => (
                <div key={index} className="border-b-4 border-black/50 py-5">
                    <h2 className="text-[15px] font-extrabold tracking-normal leading-[17px]">{userData?.role}</h2>
                    <div className="flex justify-between items-center">
                        {isProject ? <a
                            href={`${userData?.project_url}`}
                            className="text-xs text-blue-700 underline font-semibold leading-3 tracking-normal mt-2 mb-3">{userData?.project_url}</a>
                            : <p className="text-xs font-semibold leading-3 tracking-normal mt-2 mb-3">
                                {userData?.company_name} | {userData?.location}
                            </p>
                        }
                        <p className="text-xs font-semibold leading-3 tracking-normal mt-2 mb-3">{userData?.start_date} – {userData?.end_date}</p>
                    </div>
                    {userData?.job_description?.map((job, index) => (
                        // <ul key={index} className="list-disc pl-3.5">
                        <div key={index}>
                        <span>●</span>
                            <span className="text-sm tracking-normal leading-4 text-left mt-2">{job}</span>
                        </div>
                        // </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Project;