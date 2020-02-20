import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HydraAdmin,
    ResourceGuesser,
    ListGuesser,
    FieldGuesser,
    ShowGuesser,
} from '@api-platform/admin';

const entrypoint  = "https://localhost:8000/api";


const CoursesList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source="name"/>
        <FieldGuesser source="author"/>
    </ListGuesser>
);




const AuthorsList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source="name"/>
        <FieldGuesser source="courses"/>
    </ListGuesser>
);

const UsersList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source="email"/>
        <FieldGuesser source="username"/>
    </ListGuesser>
);

const UsersShow = props => (
    <ShowGuesser></ShowGuesser>
);

const StudentList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source="firstName"/>
        <FieldGuesser source="lastName"/>
    </ListGuesser>
);

const StudentShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source="firstName" addLabel={true}/>
        <FieldGuesser source="lastName" addLabel={true}/>
        <FieldGuesser source="owner" addLabel={true}/>
        <FieldGuesser source="course" addLabel={true}/>
    </ShowGuesser>
);


const Admin = () => (
    <HydraAdmin
        entrypoint="https://localhost:8000/api"
        >
        <ResourceGuesser name="courses" list={CoursesList}/>
        <ResourceGuesser name="authors" list={AuthorsList}/>
        <ResourceGuesser name="users" list={UsersList}/>
        <ResourceGuesser name="students" show={StudentShow} list={StudentList}/>
    </HydraAdmin>
);
ReactDOM.render(<Admin />, document.getElementById('root'));
serviceWorker.unregister();
