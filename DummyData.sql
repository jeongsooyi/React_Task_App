/* Insert into Users values('testuser1', 'joole1@joole.com', 'Qwer!234') inserted */

Insert into Users values('testuser2', 'joole2@joole.com', 'Qwer!234') 
Insert into Users values('testuser3', 'joole3@joole.com', 'Qwer!234') 
Insert into Users values('testuser4', 'joole4@joole.com', 'Qwer!234')


/* Insert into Tasks values('Make First Task', 'Create your first task via the task manager application', 'Requested', '09/14/2020', 'Urgent') inserted */
Insert into Tasks values('Liberation Day Materials', 'Create campaign materials for the liberation day ceremony', 'Resolved', '08/15/2020', 'General')
Insert into Tasks values('Make Annual Report', 'Make Annual Report for presentation at the End of the Year Conference', 'Requested', '12/13/2020', 'General')
Insert into Tasks values('ERP Modification for Shopify', 'the ERP for Joole needs modification to connect with Shopify for transactions', 'Requested', '09/18/2020', 'Urgent')

Insert into RequestedBy values (1, 1)
Insert into RequestedBy values (3, 2)
Insert into RequestedBy values (3, 3)
Insert into RequestedBy values (4, 4)

Insert into AssignedTo values (2, 1)
Insert into AssignedTo values (1, 2)
Insert into AssignedTo values (4, 3)
Insert into AssignedTo values (1, 4)

Insert into Departments values ('System')
Insert into Departments values ('Marketing')
Insert into Departments values ('Logistics')

Insert into UserDepartment values (1, 1)
Insert into UserDepartment values (2, 3)
Insert into UserDepartment values (3, 2)
Insert into UserDepartment values (4, 1)

Insert into Comment values (1, 2, 'Resolved')
Insert into Comment values (2, 1, 'Need more information')
Insert into Comment values (2, 3, 'Could there be a timeline function?')
Insert into Comment values (3, 1, 'Reference the manual. Thank you.')

