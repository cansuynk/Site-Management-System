# Site Management System (SiteMS)
Akbank FullStack Bootcamp Graduation Project - Site Management System (SiteMS)

# Table of Contents

1. [Project Explanation](#Project-Explanation)
3. [Used technologies](#Used-technologies:)
4. [Database](#Database)
5. [Backend](#Backend)
6. [Frontend](#Frontend)

## Project Explanation
You are an administrator on a site. You will manage the dues and common use electricity, water and natural gas bills of the apartments on your site through a system.
You have two types of users.

### 1. Admin/ Administrator
- Can enter apartment information.
- Enters resident user information.
- Enters the dues and billing information to be paid per apartment (Monthly). 
- Displays incoming payment information.
- Displays incoming messages.
- It should be understood that the messages are read/unread/new messages.
- Displays monthly debit-credit list.
- Lists, edits, deletes residents.
- Lists and deletes apartment /housing information.

### 2- User (Resident)
- Displays the invoice and dues information assigned to him/her.
- Debt can be only paid by credit card.
- Can send a message to the manager.
- Displays his/her payments.

### In the Apartment/Housing information
- In which block
- Status (Full-empty)
- Type (2+1 etc.)
- Floor location
- Apartment number
- Apartment owner or tenant

### In user information
- Name surname
- TCNo
- E-mail
- Phone
- Vehicle information (plate number, if any)

### When the system is used first
1.	The manager enters the apartment information.
2.	Enters the resident information. A password is automatically generated to log in.
3.	Assigns users to apartments.
4.	Enters monthly dues information.
5.	Enters billing information monthly
<p>
Apart from the interface, a separate service will be written for users to pay by credit card. Data for credit card service will be kept in mongodb. The service will be written as .Net WebApi.<br/>
In this service, payment is made by checking the bank information (credit card number, etc.) for each user in the system.
Payment can only be made by credit card.
</p>

## Used technologies:
- C#
- ASP .NET CORE Web Api
- ASP .NET CORE MVC
- MSSQL
- MONGO DB
- Code First / Entity FrameWork Core
- Microsoft SQL Server Management Studio
- React.js

## Database
I used 4 tables in SQL database and 1 collection in mongodb. The tables in MS SQL are as follows:

All tables:
<p align="center">
  <img src="./Screenshots/SiteManagementDatabase.PNG" />
</p>

Tables and columns:
<p align="center">
  <img align="left" src="./Screenshots/ApartmentTable.PNG" />
   <img align="right" src="./Screenshots/ResidentTable.PNG" />
  <img align="left" src="./Screenshots/InvoiceDuesTable.PNG" />
   <img align="right" src="./Screenshots/MessageTable.PNG" />
</p>

<br/>

<p>
The CreditCard collection in mongodb is as follows: <br/>
residentId is related with the id of the ResidentTable.
</p>
 
<p align="center">
  <img src="./Screenshots/CreditCardClass.PNG" />
</p>

## Backend
Two different webAPI was written. One is for MS SQL database, other is for mongodb. 


### MSSQL Database .NET Web API Project Folders

<p align="center">
  <img src="./Screenshots/SiteManagementAPI.PNG" />
</p>

APIs that is used:

<p align="center">
  <img src="./Screenshots/APIs.PNG" />
</p>

### Mongodb Database .NET Web API Project Folders

<p align="center">
  <img src="./Screenshots/CreditCardAPI.PNG" />
</p>

<p>
APIs that is used: <br/>
I used 2 APIs: Get Credit Cards and Post
</p>

<p align="center">
  <img src="./Screenshots/MongoDB_APIs.PNG" />
</p>

## Frontend
The project folders are as follows:

<p align="center">
  <img src="./Screenshots/ProjectFolders.PNG" />
</p>

<p>
In this project, there are 3 main pages which are Login, AdminPage and UserPage. <br/>
In AdminPage, there are 7 partial pages which are ListApartment, ListResident, ListInvoicesDues, ListMessages, AddUpdateApartment, AddUpdateResidents and AddInvoicesDues. <br/>
In UserPage, there are 5 partial pages which are Profile, ListInvoicesDues, ListMessages, PayInvoicesDues and SendMessages. <br/>
</p>
  
## LoginPage

<p align="center">
  <img src="./Screenshots/LoginPage.PNG" />
</p>

## Admin Pages
Partial pages are as follows:

- ListApartment

<p align="center">
  <img src="./Screenshots/AdminPage/ListApartments.PNG" />
</p>

- ListResident

<p align="center">
  <img src="./Screenshots/AdminPage/ListResidents.PNG" />
</p>

- ListInvoicesDues
You can see the paid/not paid information
<p align="center">
  <img src="./Screenshots/AdminPage/ListInvoicesDues.PNG" />
</p>

- MessageList
You can see the unread/read information
<p align="center">
  <img src="./Screenshots/AdminPage/MessageList.PNG" />
</p>

- MessageList after open a new message
Unread message becomes read message
<p align="center">
  <img src="./Screenshots/AdminPage/MessagesAfterOpen.PNG" />
</p>

- AddUpdateApartment
New apartment can be added or existing apartment can be updated (according to block and apartment No)
<p align="center">
  <img src="./Screenshots/AdminPage/AddUpdateApartment.PNG" />
</p>

- Add an example apartment

<p align="center">
  <img src="./Screenshots/AdminPage/AddApartment.PNG" />
</p>

After adding:
<p align="center">
  <img src="./Screenshots/AdminPage/ApartmentAdded.PNG" />
</p>

- AddUpdateResident
New resident can be added or existing resident can be updated (according to tcNo)
<p align="center">
  <img src="./Screenshots/AdminPage/AddUpdateResident.PNG" />
</p>

- AddDept
Existing apartments are listed and can be selected.
<p align="center">
  <img src="./Screenshots/AdminPage/AddDept.PNG" />
</p>

- Delete an existing resident

<p align="center">
  <img src="./Screenshots/AdminPage/DeleteResident.PNG" />
</p>

After deletion:

<p align="center">
  <img src="./Screenshots/AdminPage/AfterDeletion.PNG" />
</p>

## User Pages
Partial pages are as follows:

- Profile
User profile (values are dummy)
<p align="center">
  <img src="./Screenshots/UserPage/UserProfile.PNG" />
</p>

- ListInvoicesDues
User's invoices and dues are filtered and displayed. Paid/not paid information can be seen.
<p align="center">
  <img src="./Screenshots/UserPage/InvoicesDues.PNG" />
</p>

- MessageList
User's messages are filtered and displayed.
<p align="center">
  <img src="./Screenshots/UserPage/Messages.PNG" />
</p>

- PayInvoiceDue
<p>
User can select the debt which is not paid and user can select a credit card which is saved before.<br/>
Or user can paid debt by adding new credit card.
</p>
<p align="center">
  <img src="./Screenshots/UserPage/PayInvoiceDue.PNG" />
</p>

- SendMessage

<p align="center">
  <img src="./Screenshots/UserPage/SendMessage.PNG" />
</p>

After sending new message:
<p align="center">
  <img src="./Screenshots/UserPage/MessagesAfterAdd.PNG" />
</p>


