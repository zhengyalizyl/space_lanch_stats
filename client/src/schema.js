import { gql } from "@apollo/client";


export const GET_LANUCHES_QUERY = gql`
  query getlanuches{
    lanuches{
        id,
        flight_number,
        mission_name,
        launch_date_local,
        launch_success,
        rocket{
          rocket_id,
          rocket_name,
          rocket_type
        }
      }
  }
`

export const GET_LANUCH_BY_ID = gql`
query getLanuchById($flight_number:String!){
    lanuch(flight_number:$flight_number){
        id,
        flight_number,
        mission_name,
        rocket{
          rocket_id,
          rocket_name,
          rocket_type
        }
      }
}
`