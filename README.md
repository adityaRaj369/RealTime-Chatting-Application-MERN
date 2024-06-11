<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">REALTIME-CHATTING-APPLICATION-MERN</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/adityaRaj369/RealTime-Chatting-Application-MERN?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/adityaRaj369/RealTime-Chatting-Application-MERN?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/adityaRaj369/RealTime-Chatting-Application-MERN?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/adityaRaj369/RealTime-Chatting-Application-MERN?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Socket.io-010101.svg?style=flat&logo=socketdotio&logoColor=white" alt="Socket.io">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running RealTime-Chatting-Application-MERN](#-running-RealTime-Chatting-Application-MERN)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

Real Time Chat Application

---

## Live Link
https://realtime-chatting-application-mern.onrender.com/

---

##  Repository Structure

```sh
└── RealTime-Chatting-Application-MERN/
    ├── LICENSE
    ├── README.md
    ├── backend
    │   ├── controllers
    │   │   ├── auth.controller.js
    │   │   ├── message.controller.js
    │   │   └── user.controller.js
    │   ├── db
    │   │   └── connectToMongoDB.js
    │   ├── middleware
    │   │   └── protectRoute.js
    │   ├── models
    │   │   ├── conversation.model.js
    │   │   ├── message.model.js
    │   │   └── user.model.js
    │   ├── routes
    │   │   ├── auth.routes.js
    │   │   ├── message.routes.js
    │   │   └── user.routes.js
    │   ├── server.js
    │   ├── socket
    │   │   └── socket.js
    │   └── utils
    │       └── generateToken.js
    ├── frontend
    │   ├── .eslintrc.cjs
    │   ├── README.md
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   ├── bg.jpg
    │   │   ├── testBack.png
    │   │   └── vite.svg
    │   ├── src
    │   │   ├── App.css
    │   │   ├── App.jsx
    │   │   ├── assets
    │   │   │   ├── react.svg
    │   │   │   └── sounds
    │   │   │       └── notification.mp3
    │   │   ├── components
    │   │   │   ├── messages
    │   │   │   │   ├── Message.jsx
    │   │   │   │   ├── MessageContainer.jsx
    │   │   │   │   ├── MessageInput.jsx
    │   │   │   │   └── Messages.jsx
    │   │   │   ├── sidebar
    │   │   │   │   ├── Conversation.jsx
    │   │   │   │   ├── Conversations.jsx
    │   │   │   │   ├── LogoutButton.jsx
    │   │   │   │   ├── SearchInput.jsx
    │   │   │   │   └── Sidebar.jsx
    │   │   │   └── skeletons
    │   │   │       └── MessageSkeleton.jsx
    │   │   ├── context
    │   │   │   ├── AuthContext.jsx
    │   │   │   └── SocketContext.jsx
    │   │   ├── hooks
    │   │   │   ├── useGetConversations.js
    │   │   │   ├── useGetMessages.js
    │   │   │   ├── useListenMessages.js
    │   │   │   ├── useLogin.js
    │   │   │   ├── useLogout.js
    │   │   │   ├── useSendMessage.js
    │   │   │   └── useSignup.js
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   ├── pages
    │   │   │   ├── home
    │   │   │   │   └── Home.jsx
    │   │   │   ├── login
    │   │   │   │   └── Login.jsx
    │   │   │   └── signup
    │   │   │       ├── GenderCheckbox.jsx
    │   │   │       └── SignUp.jsx
    │   │   ├── utils
    │   │   │   ├── emojis.js
    │   │   │   └── extractTime.js
    │   │   └── zustand
    │   │       └── useConversation.js
    │   ├── tailwind.config.js
    │   └── vite.config.js
    ├── package-lock.json
    └── package.json
```

---

##  Getting Started



###  Installation

1. Clone the RealTime-Chatting-Application-MERN repository:

```sh
git clone https://github.com/adityaRaj369/RealTime-Chatting-Application-MERN
```

2. Change to the project directory:

```sh
cd RealTime-Chatting-Application-MERN
```

3. Install the dependencies:

```sh
npm install
```

###  Running RealTime-Chatting-Application-MERN

Use the following command to run RealTime-Chatting-Application-MERN:

```sh
npm run build
```


```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/adityaRaj369/RealTime-Chatting-Application-MERN/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/adityaRaj369/RealTime-Chatting-Application-MERN/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/adityaRaj369/RealTime-Chatting-Application-MERN/issues)**: Submit bugs found or log feature requests for Realtime-chatting-application-mern.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/adityaRaj369/RealTime-Chatting-Application-MERN
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [MIT](https://choosealicense.com/licenses/) file.

---
