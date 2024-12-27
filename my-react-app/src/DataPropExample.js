export default function DatapropEx(props) {
    // Destructure props to make it easier to access the properties
    const { name, address, photo, education, working_status } = props.data;
  
    // Ensure all required props exist before trying to access them
    if (!address || !education || !working_status) {
      return <div>Invalid Data</div>; // Show an error message or fallback UI if data is missing
    }
  
    return (
      <div className="container">
        <div className="img-main">
          <img src={photo} alt="alter-text" />
        </div>
        <div className="main-container">
          <h1>{name}</h1>
          <div className="address">
            <p className="address-tag">
              Address : {address.street} {address.city} {address.state} {address.zip},{' '}
              {address.country}
            </p>
          </div>
          <div className="education">
            <p className="education-status">
              Education: {education.degree} {education.university} {education.graduation_year}
            </p>
          </div>
          <div className="working-status">
            <p className="working-status">
              Working-status: {working_status.status}{' '}
              <span>
                Current Employee: {working_status.current_job.title}{' '}
                {working_status.current_job.company} {working_status.current_job.start_date}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  