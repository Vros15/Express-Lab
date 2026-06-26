# 🌍 Express Router Lab

A simple RESTful API built with **Node.js** and **Express** that demonstrates routing, CRUD operations, middleware, request validation, and query parameter sorting using two resources:

- 📍 Locations
- 🏛️ Landmarks

This project was built as part of an Express.js routing lab to practice creating modular APIs using Express Routers.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- Morgan
- Lodash
- UUID

---

## 📁 Project Structure

```
express-lab/
│
├── data/
│   ├── locationsData.js
│   └── landmarksData.js
│
├── Routes/
│   ├── locationsRouter.js
│   └── landmarksRouter.js
│
├── index.js
├── utils.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/vros15/express-lab-router.git
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node index.js
```

Server runs on

```
http://localhost:3000
```

---

# API Endpoints

---

## 📍 Locations

### GET All Locations

```
GET /locations
```

Returns every location.

### Sort by Name

```
GET /locations?sortBy=name&order=asc
```

```
GET /locations?sortBy=name&order=desc
```

### Sort by Population

```
GET /locations?sortBy=population&order=asc
```

```
GET /locations?sortBy=population&order=desc
```

---

### POST Location

```
POST /locations
```

Example Body

```json
{
    "name": "Florida",
    "country": "USA",
    "population": 2154013
}
```

---

### PUT Location

```
PUT /locations/:id
```

Example

```json
{
    "population": 2500000
}
```

---

### DELETE Location

```
DELETE /locations/:id
```

Returns the deleted resource and a success message.

---

# 🏛️ Landmarks

---

### GET All Landmarks

```
GET /landmarks
```

### Sort by Name

```
GET /landmarks?sortBy=name&order=asc
```

```
GET /landmarks?sortBy=name&order=desc
```

### Sort by Year Built

```
GET /landmarks?sortBy=yearBuilt&order=asc
```

```
GET /landmarks?sortBy=yearBuilt&order=desc
```

---

### POST Landmark

```
POST /landmarks
```

Example

```json
{
    "name": "USF",
    "city": "Tampa",
    "yearBuilt": 2026
}
```

---

### PUT Landmark

```
PUT /landmarks/:id
```

Example

```json
{
    "city": "Orlando"
}
```

---

### DELETE Landmark

```
DELETE /landmarks/:id
```

Returns the deleted landmark and a success message.

---

# Features

- Modular Express Routers
- RESTful API Design
- CRUD Operations
- UUID Generated IDs
- Query Parameter Sorting
- Request Validation
- Morgan Request Logging
- In-memory Data Storage
- Proper HTTP Status Codes
- JSON Responses

---

# Example Success Response

```json
{
    "message": "Location updated successfully",
    "location": {
        "id": "...",
        "name": "Seattle",
        "country": "USA",
        "population": 800000
    }
}
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Resource Not Found |

---
