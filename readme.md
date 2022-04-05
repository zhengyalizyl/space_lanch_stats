1.
query all lanuches,for exemple:
    {
  lanuches{
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
2.
query on lanuch,for exemple:
{
  lanuch(flight_number:2){
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

3.query all rockets,for exemple
{
  rockets{
    rocket_id,
    rocket_name,
    rocket_type
    
  }
}

4.query one rocket,for exemple
{
  rocket(rocket_id:"falcon9"){
    rocket_id,
    rocket_name,
    rocket_type
    
  }
}


