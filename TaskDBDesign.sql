CREATE TABLE [dbo].[Users]
(
	[UserId]        INT     IDENTITY (1, 1) NOT NULL,
    [UserName]      NVARCHAR (50) NOT NULL,
    [UserEmail]     NVARCHAR(50) NULL,
    [UserPassword]  NVARCHAR (50)      NOT NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC)
)

CREATE TABLE [dbo].[Departments]
(
	[DepartmentId]             INT IDENTITY (1, 1) NOT NULL,
    [DepartmentName]           NVARCHAR(50) NOT NULL,
    PRIMARY KEY CLUSTERED ([DepartmentId] ASC)
)

CREATE TABLE [dbo].[UserDepartment]
(
	[UserId]        INT    NOT NULL,
	[DepartmentId]  INT    NOT NULL,

	CONSTRAINT [FK_dbo.UserDepartment_dbo.Users_UserId] FOREIGN KEY ([UserId]) 
        REFERENCES [dbo].[Users] ([UserId]) ON DELETE CASCADE,
	CONSTRAINT [FK_dbo.UserDepartment_dbo.Departments_DepartmentId] FOREIGN KEY ([DepartmentId]) 
        REFERENCES [dbo].[Departments] ([DepartmentId]) ON DELETE CASCADE
)

CREATE TABLE [dbo].[Tasks]
(
	[TaskId]        INT     IDENTITY (1, 1) NOT NULL,
    [TaskTitle]      NVARCHAR (50) NOT NULL,
    [TaskDescription]     NVARCHAR(200) NULL,
    [TaskStatus]  NVARCHAR (50)      NOT NULL,
	[TaskDueDate]  DATETIME      NOT NULL,
	[TaskPriority]  NVARCHAR (50)      NOT NULL,
    PRIMARY KEY CLUSTERED ([TaskId] ASC)
)

CREATE TABLE [dbo].[RequestedBy]
(
	[RequestorId]        INT    NOT NULL,
	[TaskId]        INT    NOT NULL,

	CONSTRAINT [FK_dbo.RequestedBy_dbo.Requestor_RequestorId] FOREIGN KEY ([RequestorId]) 
        REFERENCES [dbo].[Users] ([UserId]) ON DELETE CASCADE,
	CONSTRAINT [FK_dbo.RequestedBy_dbo.Tasks_TaskId] FOREIGN KEY ([TaskId]) 
        REFERENCES [dbo].[Tasks] ([TaskId]) ON DELETE CASCADE
)

CREATE TABLE [dbo].[AssignedTo]
(
	[AssigneeId]        INT    NOT NULL,
	[TaskId]        INT    NOT NULL,

	CONSTRAINT [FK_dbo.AssignedTo_dbo.Assignee_AssigneeId] FOREIGN KEY ([AssigneeId]) 
        REFERENCES [dbo].[Users] ([UserId]) ON DELETE CASCADE,
	CONSTRAINT [FK_dbo.AssignedTo_dbo.Tasks_TaskId] FOREIGN KEY ([TaskId]) 
        REFERENCES [dbo].[Tasks] ([TaskId]) ON DELETE CASCADE
)

CREATE TABLE [dbo].[Comment]
(
	[CommentId]        INT    IDENTITY (1, 1) NOT NULL,
	[TaskId]        INT    NOT NULL,
	[CommentorId]        INT    NOT NULL,
	[Comment]       NVARCHAR(300) NOT NULL,

	PRIMARY KEY CLUSTERED ([CommentId] ASC),
	CONSTRAINT [FK_dbo.Comment_dbo.Commentor_CommentorId] FOREIGN KEY ([CommentorId]) 
        REFERENCES [dbo].[Users] ([UserId]) ON DELETE CASCADE,
	CONSTRAINT [FK_dbo.Comment_dbo.Tasks_TaskId] FOREIGN KEY ([TaskId]) 
        REFERENCES [dbo].[Tasks] ([TaskId]) ON DELETE CASCADE
)