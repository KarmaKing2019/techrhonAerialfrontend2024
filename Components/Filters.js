// Filters.js
function Filters(props) {
  const firstNameInputHandler = (event) => {
    props.changeFirstName(event.target.value);
  };

  // Similar handlers for last name and city

  return (
    <div className="user_inputs">
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" type="text" onChange={firstNameInputHandler} />
      {/* Similar input fields for last name and city */}
    </div>
  );
}
