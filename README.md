# API 명세서

날짜: 2024년 9월 4일

### **Overview**

## Singer Management API는 Node.js와 Express를 사용하여 구현된 간단한 RESTful API 애플리케이션입니다. 이 애플리케이션은 가수 목록을 관리하며, 전체 가수 목록 조회, 특정 가수 조회, 새로운 가수 추가 기능을 제공합니다.

### **Installation**

Singer Management API를 로컬 환경에서 실행하려면 다음 단계를 따르세요:

1. **Repository를 클론합니다:**

   ```bash
   git clone <repository-url>

   ```

2. **프로젝트 디렉토리로 이동합니다:**

   ```bash
   cd singer-management-api

   ```

3. **필요한 의존성을 설치합니다:**

   ```bash
   npm install

   ```

---

### **Running the Application**

서버를 시작하려면 다음 명령어를 실행하세요:

```bash
bash코드 복사
node app.js

```

서버가 다음 주소에서 실행됩니다:

```arduino
http://localhost:3000
```

---

### **API Endpoints**

| **Method** | **Endpoint** | **Description**                          |
| ---------- | ------------ | ---------------------------------------- |
| GET        | /singers     | 전체 가수 목록을 조회합니다.             |
| GET        | /singer/     | 특정 ID를 가진 가수의 정보를 조회합니다. |
| POST       | /singer      | 새로운 가수를 추가합니다.                |

---

### **API Details**

### **GET /singers**

- **Description**: 시스템에 등록된 모든 가수의 목록을 JSON 형식으로 반환합니다.
- **Request**:

  ```
  GET /singers HTTP/1.1
  Host: localhost:3000
  ```

- **Response Example**:

  ```json
  {
    "1": {
      "singerName": "박효신",
      "sub": "112만명",
      "singNum": "500개"
    },
    "2": {
      "singerName": "아이유",
      "sub": "89.4만명",
      "singNum": "534개"
    },
    "3": {
      "singerName": "태양",
      "sub": "54.8만명",
      "singNum": "726개"
    }
  }
  ```

### **GET /singer/**

- **Description**: 특정 가수의 ID를 기반으로 가수의 상세 정보를 반환합니다.
- **URL Parameters**:
  - `id`: 조회하고자 하는 가수의 고유 ID.
- **Request**:

  ```
  GET /singer/1 HTTP/1.1
  Host: localhost:3000
  ```

- **Response Example**:

  ```json
  {
    "singerName": "박효신",
    "sub": "112만명",
    "singNum": "500개"
  }
  ```

### **POST /singer**

- **Description**: 새로운 가수를 시스템에 추가합니다.
- **Request Body**: 다음과 같은 JSON 형식의 데이터를 포함해야 합니다:

  ```json
  {
    "singerName": "String",
    "sub": "String",
    "singNum": "String"
  }
  ```

- **Request Example**:

  ```
  POST /singer HTTP/1.1
  Host: localhost:3000
  Content-Type: application/json
  {
    "singerName": "NCT",
    "sub": "1.2만명",
    "singNum": "150개"
  }
  ```

- **Response Example**:

  ```
  코드 복사
  NCT님 새로운 가수로 등록되었습니다.

  ```

---

### **Example Responses**

아래는 API와 상호작용 시 예상할 수 있는 예시 응답들입니다:

1. **GET /singers**: 모든 가수를 JSON 형식으로 반환합니다.
2. **GET /singer/**: 주어진 ID에 해당하는 가수의 상세 정보를 반환합니다.
3. **POST /singer**: 새로운 가수가 성공적으로 추가되었음을 알리는 메시지를 반환합니다.

---

### **Notes**

- API 요청을 하기 전에 서버가 실행 중인지 확인하세요.
- Postman이나 CURL과 같은 도구를 사용하여 API 엔드포인트를 테스트할 수 있습니다.
- 주어진 ID에 해당하는 가수가 없으면 응답은 빈 값이 반환되며, 오류 메시지는 제공되지 않습니다.
