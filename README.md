# Azure Cloud Resume Challenge - React CV

This project is a **React-based CV** deployed on **Azure Static Web Apps**, with a **Go-based Azure Function** and **Cosmos DB** to track visitor counts. It demonstrates cloud, frontend, and backend skills while following **CI/CD best practices**.

## Live Demo
🔗 [View Resume](https://your-azure-static-web-app-url)

---

## Project Overview
This project is part of the **Azure Cloud Resume Challenge**, demonstrating:
- **Frontend:** React, hosted on **Azure Static Web Apps**
- **Backend:** Serverless API using **Azure Functions (Go)**
- **Database:** Visitor counter stored in **Azure Cosmos DB**
- **CI/CD:** Automated deployments via **GitHub Actions**

---

## Technologies Used
- **Frontend:** React, Material-UI
- **Backend:** Azure Functions (Go)
- **Database:** Azure Cosmos DB (NoSQL)
- **CI/CD:** GitHub Actions
- **Cloud Hosting:** Azure Static Web Apps

---

## Features
- **Live Cloud-Hosted Resume**
- **Real-Time Visitor Counter (Azure Functions + Cosmos DB)**
- **Automated Deployments via GitHub Actions**
- **Fully Responsive UI with Material-UI**

---

## Setup & Deployment
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/azure-cloud-resume.git
cd azure-cloud-resume
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Run Locally
```sh
npm start
```
### 4️⃣ Deploy to Azure Static Web Apps
1. Go to **Azure Portal** → Create **Static Web App**
2. Connect GitHub repo → Set build folder as `build/`
3. Deploy!

---

## Backend Setup (Visitor Counter API in Go)
### 1️⃣ Create an Azure Function in Go
```sh
func init --worker-runtime go
func new --name GetVisitorCount --template "HTTP trigger" --authlevel "anonymous"
```
### 2️⃣ Connect to Cosmos DB
- Create **Azure Cosmos DB (NoSQL)**
- Add a **database:** `resume-db`
- Add a **container:** `visitors`
- Add a sample document:
  ```json
  {
    "id": "1",
    "count": 0
  }
  ```
### 3️⃣ Implement `GetVisitorCount/main.go`
```go
package main

import (
	"context"
	"encoding/json"
	"net/http"
	"os"

	"github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos"
	"github.com/Azure/azure-functions-go/api"
)

type VisitorCount struct {
	ID    string `json:"id"`
	Count int    `json:"count"`
}

func GetVisitorCount(w http.ResponseWriter, r *http.Request) {
	cosmosEndpoint := os.Getenv("COSMOS_DB_ENDPOINT")
	cosmosKey := os.Getenv("COSMOS_DB_KEY")
	databaseName := "resume-db"
	containerName := "visitors"

	client, err := azcosmos.NewClientWithKey(cosmosEndpoint, cosmosKey, nil)
	if err != nil {
		http.Error(w, "Failed to connect to Cosmos DB", http.StatusInternalServerError)
		return
	}

	ctx := context.Background()
	container := client.NewContainer(databaseName, containerName)
	itemID := "1"

	itemResponse, err := container.ReadItem(ctx, azcosmos.PartitionKey{itemID}, itemID, nil)
	if err != nil {
		http.Error(w, "Error reading item from Cosmos DB", http.StatusInternalServerError)
		return
	}

	var visitor VisitorCount
	err = json.Unmarshal(itemResponse.Value, &visitor)
	if err != nil {
		http.Error(w, "Error parsing JSON", http.StatusInternalServerError)
		return
	}

	visitor.Count++

	_, err = container.ReplaceItem(ctx, azcosmos.PartitionKey{itemID}, itemID, visitor, nil)
	if err != nil {
		http.Error(w, "Error updating visitor count", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(visitor)
}

func main() {
	api.HandleFunc(GetVisitorCount)
	api.Listen()
}
```
### 4️⃣ Deploy to Azure Functions
```sh
func azure functionapp publish <your-function-app-name>
```

---

## Running Tests for Azure Function in Go
### 1️⃣ Run Go Unit Tests
Create `GetVisitorCount/main_test.go`:
```go
package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGetVisitorCount(t *testing.T) {
	req, err := http.NewRequest("GET", "/", nil)
	if err != nil {
		t.Fatal(err)
	}

	recorder := httptest.NewRecorder()
	handler := http.HandlerFunc(GetVisitorCount)
	handler.ServeHTTP(recorder, req)

	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("Handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}
}
```
### 2️⃣ Run Tests
```sh
go test -v
```

---

## How It Works
1. **Frontend (React CV)** → Fetches visitor count from Azure Functions API
2. **Backend (Azure Function)** → Reads & updates the visitor count in Cosmos DB
3. **Database (Cosmos DB)** → Stores the total visitor count
4. **CI/CD (GitHub Actions)** → Auto-deploys updates to Azure

---

## Future Enhancements
- Add authentication & admin dashboard
- Improve performance & caching
- Deploy using Terraform for Infrastructure as Code (IaC)

---

## Author
**Mary Yunju Kim**
- [LinkedIn](https://linkedin.com/in/mary-yunju-kim-610002123)
- [Email](mailto:maryunjukim@gmail.com)

---

## Acknowledgments
This project is inspired by the **Azure Cloud Resume Challenge** by [Forrest Brazeal](https://cloudresumechallenge.dev/).

