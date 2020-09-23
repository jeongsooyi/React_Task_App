

CREATE TABLE [dbo].[Departments]
(
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[Name] NVARCHAR(300) NOT NULL,
	PRIMARY KEY CLUSTERED ([Id] ASC)
)

CREATE TABLE [dbo].[Users]
(
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[Username] VARCHAR (300) NOT NULL,
	[Email] VARCHAR(320) NULL,
	[Password] VARCHAR (300) NOT NULL,
	[DepartmentId] INT NOT NULL,

	PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_dbo.Users_dbo.Departments_DepartmentId] FOREIGN KEY ([DepartmentId]) 
        REFERENCES [dbo].[Departments] ([Id]) ON DELETE CASCADE
)

CREATE TABLE [dbo].[Tasks]
(
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[Title] NVARCHAR (300) NOT NULL,
	[Description] NTEXT NULL,
	[Status] INT NOT NULL,
	[DueDate] DATETIME NOT NULL,
	[CreatedOn] DATETIME NOT NULL,
	[Priority] INT NOT NULL,
	[RequestorId] INT NULL,
	[AssigneeId] INT NULL,
	PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_dbo.Tasks_dbo.Requestor_RequestorId] FOREIGN KEY ([RequestorId]) 
        REFERENCES [dbo].[Users] ([Id]),
	CONSTRAINT [FK_dbo.Tasks_dbo.Assignee_AssigneeId] FOREIGN KEY ([AssigneeId]) 
        REFERENCES [dbo].[Users] ([Id]),
)


CREATE TABLE [dbo].[Comments]
(
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[TaskId] INT NOT NULL,
	[CommentorId] INT NOT NULL,
	[Description] NTEXT NOT NULL,
	[CreatedOn] DATETIME NOT NULL,

	PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_dbo.Comment_dbo.Commentor_CommentorId] FOREIGN KEY ([CommentorId]) 
        REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE,
	CONSTRAINT [FK_dbo.Comment_dbo.Tasks_TaskId] FOREIGN KEY ([TaskId]) 
        REFERENCES [dbo].[Tasks] ([Id]) ON DELETE CASCADE
)

Insert into Departments values ('System')
Insert into Departments values ('Marketing')
Insert into Departments values ('Logistics')

Insert into Users values('testuser1', 'joole1@joole.com', 'Qwer!234', 1)
Insert into Users values('testuser2', 'joole2@joole.com', 'Qwer!234', 1) 
Insert into Users values('testuser3', 'joole3@joole.com', 'Qwer!234', 2) 
Insert into Users values('testuser4', 'joole4@joole.com', 'Qwer!234', 3)


Insert into Tasks values('Make First Task', 'Create your first task via the task manager application', 1, '2020-09-15T00:00:00', '2020-09-12T00:00:00', 2, 1, 2)
Insert into Tasks values('Liberation Day Materials', 'Create campaign materials for the liberation day ceremony', 1, '2020-08-15T00:00:00','2020-07-20T00:00:00', 1, 2, 4)
Insert into Tasks values('Make Annual Report', 'Make Annual Report for presentation at the End of the Year Conference', 0, '2020-12-13T00:00:00','2020-08-23T00:00:00', 1, 4, 3)
Insert into Tasks values('ERP Modification for Shopify', 'the ERP for Joole needs modification to connect with Shopify for transactions', 2, '2020-09-18T00:00:00','2020-09-14T00:00:00', 0, 3, 4)

Insert into Comments values (1, 2, 'Resolved', '2020-08-14T00:00:00')
Insert into Comments values (2, 1, 'Need more information', '2020-09-13T00:00:00')
Insert into Comments values (2, 3, 'Could there be a timeline function?', '2020-09-10T00:00:00')
Insert into Comments values (3, 1, 'Reference the manual. Thank you.', '2020-09-14T00:00:00')

