import React from 'react'
// import './Hometable.css'
import { Row,Card,Table,Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Hometable() {
  return (
        <>
        <div className="container mt-5">
            <Row>
                <div className="col">
                    <Card className='shadow'>
                      <Table className='align-items-center' responsive='sm'>
                      <thead className='thead-dark'>
          <tr className='table-dark'>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
<td>1</td>
<td>Max Miller</td>
<td>max@gmail.com</td>
<td>M</td>
<td>
<Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Active
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
            Active
            </Dropdown.Item>
            <Dropdown.Item>
            InActive
            </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</td>
<td>
    <img className="rounded" width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="profile picture" />
</td>
<td>
<Dropdown>
      <Dropdown.Toggle  variant="light"  id="dropdown-basic1">
      <i class="fa-solid fa-ellipsis-vertical  fs-4"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
            <Dropdown.Item>
            <Link to={'/profile/1'} className="text-decoration-none">
            <i className="fa-solid fa-eye text-success me-2 fs-5"></i>
            <span className="fs-5 text-dark">View</span>
            </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to={'/edit/1'} className="text-decoration-none">
            <i className="fa-solid fa-pen text-primary me-2 fs-5"></i>
            <span className="fs-5 text-dark">Edit</span>
            </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <div>
                <i className="fa-solid fa-trash text-danger me-2 fs-5"></i>
            <span className="fs-5 text-dark">Delete</span> 
                </div>
            </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
</td>
            </tr>
            </tbody>
                      </Table>
                    </Card>
                </div>
                </Row>
            </div>
     </>
  )
}

export default Hometable