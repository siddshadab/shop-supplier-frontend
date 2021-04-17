import React from 'react'

export default class Features extends React.Component{
   render(){
       return (
        <div className='row m-1'>
            <div className='col-12'>
                <h4 className='text-white text-center m-1'>{this.props.feat.toUpperCase()}</h4>
                <hr/>
            {/* {this.props.feat ==='Dashboards' && <p style={{fontSize:15}} className='text-center text-white'>{this.props.feat} description go here </p>}
            {this.props.feat ==='EVV & Safety' && <p style={{fontSize:15}} className='text-center text-white'>{this.props.feat} description go here </p>}
            {this.props.feat ==='Time & Expense' && <p style={{fontSize:15}} className='text-center text-white'>{this.props.feat} description go here</p>}
            {this.props.feat ==='Documents' && <p style={{fontSize:15}} className='text-center text-white'>{this.props.feat} description go here </p>}
            {this.props.feat ==='Checklist & Reminders' && <p style={{fontSize:15}} className='text-center text-white'>{this.props.feat} description go here </p>} */}
            </div>
            <div className='row col-12'>
                <div className='col-md-7 col-sm-7'>
                    {this.props.feat ==='Dashboards' && <p style={{fontSize:17, paddingLeft:10}} className='text-center text-white'>Take the pulse of your business whenever you want.You need the ability to answer many essential questions: <br/>How many new cases have I onboarded? How much time are my case workers spending on their cases? <br/>How are the cases distributed across counties/case workers? And many more. <br/>We harness the power of Analytics to put these answers on your fingertips through easy to understand visual dashboards. </p>}
                    {this.props.feat ==='EVV & Safety' && <p style={{fontSize:17,paddingLeft:10}} className='text-center text-white'>With employees in the field, safety is a primary concern. Through easy to use one touch button interfaces, your employees can let the home office know where they are.<br/> In addition, simple Check-In/Check-out interface enables Electronic Verification of Visit (E.V.V) compliance as per the Cures Act, capturing essential data including location, duration and other required information.</p>}
                    {this.props.feat ==='Time & Expense' && <p style={{fontSize:17,paddingLeft:10}} className='text-center text-white'>Time tracking can unlock key information about your business but remembering to do it can be a challenge. <br/>FieldWorker makes it easy to track time and expenses, so you get access to critical data without driving yourself (or your team) crazy. With one touch interfaces, ability to track and amend time in a variety of ways, we make it extremely easy to track time as well as utilize this to provide you valuable critical information for your business.</p>}
                    {this.props.feat ==='Documents' && <p style={{fontSize:17,paddingLeft:10}} className='text-center text-white'>Make it easy for your employees to capture important documents in the field and have them organized for easy access by you whenever needed.<br/> Using the familiar camera interface on mobile devices, FieldWorker makes it easy to capture important documents, tag them, associate them with tasks and projects for organization and access by you or any authorized person.<br/> You and your employees no longer have to deal with tracking down missing documents.</p>}
                    {this.props.feat ==='Checklist & Reminders' && <p style={{fontSize:17,paddingLeft:10}} className='text-center text-white'>Ensure that your employees perform to the best of their abilities. <br/>Help all your employees get organized to be like your top performers. <br/>With easy to setup reminders & checklists FieldWorker makes organization of tasks, prioritizations and reminders a breeze. <br/>Not only do employees know the critical tasks and what is coming due, you will know the status of various tasks without being intrusive or having to ask numerous questions! </p>}
                
                </div>
                <div className='col-md-5 col-sm-5'>
                    {this.props.feat ==='Dashboards' && <img style={{width: '19rem',height: '20rem'}} src='../dashboards-screen.png' alt='dashboard'/>}
                    {this.props.feat ==='EVV & Safety' && <img style={{width: '19rem',height: '20rem'}} src='../evv-screen.png' alt='evv'/>}
                    {this.props.feat ==='Time & Expense' && <img style={{marginLeft:50,width: '10rem',height: '20rem'}} src='../time-screen.png' alt='Time'/>}
                    {this.props.feat ==='Documents' && <img style={{marginLeft:50,width: '10rem',height: '20rem'}} src='../documents-screen.png' alt='docs'/>}
                    {this.props.feat ==='Checklist & Reminders' && <img style={{marginLeft:50,width: '10rem',height: '20rem'}} src='../checklist.png' alt='checklist'/>}
                </div>
               
            </div>
            
        </div>
       )
   }
}

