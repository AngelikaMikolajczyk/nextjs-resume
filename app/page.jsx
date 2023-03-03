import React from 'react';
import AboutMe from './component/about-me';
import { aboutMe, skills, professionalData } from '../data/page-data';
import ProfessionalExperience from './component/professional-experience';

export default function Page() {
    return (
        <div>
            <AboutMe data={aboutMe} skills={skills} />
            <ProfessionalExperience data={professionalData} />
        </div>
    );
}
