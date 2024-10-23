import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './EditingProjectPage.css'

export default function EditingProjectPage() {
    let navigate = useNavigate()
    let passedState = useLocation()

    function rederect() {
        setTimeout(() => {
            navigate("/")
        }, 0)
    }
    useEffect(() => {
        if (passedState.state === null) {
            rederect()
        }
    }, [])

    return (
        <div className='editing-project-page'>
            <p className='editing-project-page_title'>{passedState.state.name}</p>
            <div className='editing-project-page_content styled-block'>
                {/* <div className='edit-project-page_description'>
                    <p>Description :</p>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cumque tempora vitae necessitatibus!
                        Rerum, ex commodi illum voluptatum, a harum sunt cumque reprehenderit tempore ab ratione temporibus debitis autem natus quaerat!
                        <span className='edit-description'><br />Edit</span></span>
                </div> */}
                <div className='edit-project-page_link'>
                    <p>Link :</p>
                    <a className="edit-project-link" href="https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg">
                        https://i.pinimg.com/736x/73/5f/4e/735f4ee165845b381f204dd6d6d18e87.jpg
                    </a>
                </div>
                <div className='edit-project_status'>
                    <p>Project Status :</p>
                    <span className='edit-project_status_active'>Active</span>
                </div>
                <div className='edit-project_api'>
                    <p>Api Key :</p>
                    <span>DcxyHYK86fq6GRqMmL9R5MaedFi5Ta</span>
                </div>
                <div className='edit-project_key'>
                    <p>Secret Key :</p>
                    <span>w2ryymgqVHzOQnVcNhlSU71u9HH96h</span>
                </div>
                <div className='edit-project_token'>
                    <p>Jwt Bearer Token* :</p>
                    <span>
                        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7InVzZXJfaWQiOjU3fSwidHlwZSI6ImFjY2VzcyIsImV4cCI6NDg4MjI1MDgxNiwiaWF0IjoxNzI4NjUwODE2LCJqdGkiOiJkMDEwODAzZi0yNmNkLTQ4ZWMtOTYyMy0zM2VhYTI2NjM2YTMifQ.7ptkulLZ-RHNtg2ERvhy8h-V2vnSZ-_7SJR1tF-TLcg
                        <span className='edit-project_token_warn'><br /><br />(*Bearer token - one per account)</span>
                    </span>
                </div>
                {/*
                //Убрать согласно правкам 22.oct 
                <div className='edit-project_buttons'>
                    <button className='edit-project_button'>Invoices for process</button>
                    <button className='edit-project_button'>Manage Subscribes</button>
                </div> */}
            </div>
        </div >
    )
}