import './SupportPage.css'

export default function SupportPage() {
    return (
        <div className='support-page block'>
            <div className='support-page_title'><h1>Support</h1></div>
            <div className='support-page_context styled-block'>
                <p>Welcome to the technical support section!</p>
                <br />
                <p>Here our team will provide assistance and help you solve any technical issues related to the use of our payment system.</p>
                <br />
                <p>   If you have any problems accessing your account, making payments, or other technical aspects, do not hesitate to contact our technical support team.
                    We are always ready to help you quickly and efficiently.
                </p>
            </div>
            <div className='block'>
                <a href="https://t.me/terrapay_support_bot" target='_blank' className='btn-done support_link'>Contact Us</a>
            </div>
        </div>
    )
}