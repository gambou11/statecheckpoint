import React from 'react'

const Profile = ({fullName,pic, profession,bio}) => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
    },
    fullName: {
      fontSize: 32,
      fontWeight: 'bold',
      margin: 0,
    },
    bio: {
      fontStyle: 'italic',
      margin: 10,
      marginLeft:'300px',
      marginRight: '300px'
    }}
  
  return (
    <div style={style.container}>
      <h1 style={style.fullName}>{fullName}</h1>
      <img src={pic} alt='avatar'/>
      <h2 style={style.bio}>{bio}</h2>
      <h2>{profession}</h2>
    </div>
  )
}

export default Profile