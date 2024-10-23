import ProjetPlate from '../../components/projectPlate/projectPlate'

import './ProjectsPage.css'

export default function ProjectsPage() {
    return (
        <div className='my-projects block'>
            <div className='my-projects_header'>My Projects</div>
            {/* Убрать согласно правкам 22 oct
            <div className='my-project_content styled-block'>
                <p>Here you can edit and manage you'r projects:</p>
                <hr />
                <button className='btn-done'> + Add Project</button>
            </div> */}
            <div className='my-projects_list'>
                <ProjetPlate name="Car Wash On Baker.st" />
                <ProjetPlate name="Pottering west" />
                <ProjetPlate name="Tabaco Cargo International" />
                <ProjetPlate name="AirLine HonkHonk" />
            </div>
        </div>
    )
}