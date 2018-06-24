# Location Based Sharing

 Publish your Messages, Events and more with people surround you

## Description

Web Application experience runs at Chrome browser, Desktop and Mobile
Some description…

## Target Platform

Desktop Chrome browser
Mobile Chrome browser

## Infrastructures

1. Client: Angular 5
2. Server: Node.js
3. Persistence: Firebase Document Database
4. Authentication: Google Firebase authentication

## Features

1. Publishing location based messages
2. Publishing location based events
3. Observing locations
4. Explore location based messages and events
5. Live Maps

### Infrastructure: Firebase Document Database

Firebase API abstraction layer

#### Service

Get collection: Gets observable firebase collection
Get document: Gets observable firebase document

### Infrastructure: Google Firebase authentication

Firebase Auth API abstraction layer, Login component and service

#### View

<pre>
Login View:

span Wellcome!
button (click)=”login()”

Logout View:

img [ngModel]=”userPhotoUri”
span {{userDisplayName}}
button (click)=”logout()”
</pre>

#### Service

1. Register user: creates new user profile
2. Login:
3. Logout:
4. Current user:

### Feature: Publishing location based messages

#### View

<pre>
input type=”text” ([ngModel])=”message”
input type=”text” ([ngModel])=”location”
button (click)=”shareMessage()”
</pre>

#### Service

Share message: Adds message to database


### Feature: Publishing location based events

#### View

<pre>
input type=”text” ([ngModel])=”title”
input type=”multi line text” ([ngModel])=”description”
input type=”text” ([ngModel])=”location”
input type=”date” ([ngModel])=”date”
button (click)=”shareEvent()”
</pre>

#### Service

Share event: Adds event to database

### Feature: Observing locations

#### View

<pre>
input type=”text” ([ngModel])=”location”
button (click)=”shareEvent()”
</pre>

#### Service

Share event: Adds event to database
