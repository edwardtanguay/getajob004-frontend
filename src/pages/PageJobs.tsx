import { useState, useEffect } from 'react';
import axios from 'axios';

type Job = {
    id: number;
    title: string;
    company: string;
    description: string;
    url: string;
    skillList: string;
    todo: string;
};

const url = 'http://localhost:3011'; 

export const PageJobs = () => {
	const [jobs, setJobs] = useState<Job[]>([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(`${url}/jobs`)).data);
		})();
	}, []);
	return (
		<div className="page pageJobs">
			<div className="jobs">
				<h2>There are {jobs.length} jobs:</h2>
				{jobs.map((job) => {
					return (
						<div className="job" key={job.id}>
							<div className="title">
								<a href={job.url} target="_blank">
									{job.title}
								</a>
							</div>
							<div className="company">{job.company}</div>
							<div className="description">{job.description}</div>
							<div className="skills">{job.skillList}</div>
							<div className="todo">{job.todo}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
