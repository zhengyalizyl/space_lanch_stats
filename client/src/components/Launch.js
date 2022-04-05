import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_LANUCH_BY_ID } from "../schema";
import { Link,useParams } from "react-router-dom";


export default function Launch(props) {
    const params=useParams();
    const { flight_number } =params;
    const { data, loading, error } = useQuery(GET_LANUCH_BY_ID, {
        variables: {
            flight_number:parseInt(flight_number)
        }
    }
    )

    if (loading) return <h4>loading...</h4>;
    if (error) console.log(error);
    const {
        mission_name,
        launch_year,
        launch_success,
        rocket: { rocket_id, rocket_name, rocket_type }
      } = data.lanuch;
    return (
        <div>
        <h1 className="display-4 my-3">
          <span className="text-dark">Mission: </span> { mission_name }
        </h1>
        <h4 className="mb-3">
          Launch Details
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Flight Number: {flight_number}</li>
          <li className="list-group-item">Flight Year: {launch_year}</li>
          <li className="list-group-item">Flight Successful: {launch_success ? 'Yes' : 'No'}</li>
        </ul>
        <h4 className="mb-3">
          Rocket Details
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Rocket ID: {rocket_id}</li>
          <li className="list-group-item">Rocket Name: {rocket_name}</li>
          <li className="list-group-item">Rocket Type: {rocket_type}</li>
        </ul>
        <hr />
        <Link to="/" className="btn btn-secondary">Back</Link>
      </div>
    )
}
