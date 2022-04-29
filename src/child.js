import './styles.css';



function Child() {
 const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }
    
return(
  <div className="container">
  <img src={employee.profileImg} alt='cannot display profile image'/>
  <div className='info'>
  
  <h1>{employee.name}</h1>
  <p><strong>{employee.location}</strong></p>
  <h5>Blood Group</h5>
  <p><strong>{employee.bloodGroup}</strong></p>
  <h5>Age</h5>
  <p><strong>{employee.age}</strong></p>
  </div>
</div>
)
}



export default App;

