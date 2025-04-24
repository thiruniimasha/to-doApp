# 📝 Todo App — React Native CLI

A beautifully styled, functional Todo app built using **React Native CLI** and **Zustand** for state management. It allows users to create, edit, delete, mark complete, and share tasks — with custom modals and floating action icons designed to match a professional UI.

---

## 📌 Features

- Add tasks with title and body
- Delete and edit tasks with modals
- Mark tasks as complete
- View task details (Info modal)
- Share tasks via social platforms (Share modal)
- Priority tags shown via card border colors
- Persistent storage with AsyncStorage
- Fully responsive and accessible design

---

## 🛠️ Tech Stack

-  React Native (CLI, not Expo)
-  TypeScript
-  Zustand — Lightweight state management
-  AsyncStorage — Local data persistence
-  React Navigation — Smooth screen transitions

---

## 🎨 Figma Design

This app strictly follows the UI design provided in the official Figma:

👉 [View Figma Design](https://www.figma.com/design/0voUh3g2fDdGMbKNibqygj/To-Do-List-(Community)?node-id=42-188&p=f&t=PYitSXbMjt9piMOo-0)

---

## 📸 Screenshots & Demo


https://github.com/user-attachments/assets/86380095-2463-437c-b5f2-bbf0f6f79741

![empty task](https://github.com/user-attachments/assets/79575bf1-9938-4116-a5aa-ff38d5f1c02f)

![Task list](https://github.com/user-attachments/assets/6a4709a9-6b14-4caa-9d00-b1caa213b14d)

![Option bar](https://github.com/user-attachments/assets/6deb5d1b-8c51-4e24-8c0e-49745738e242)

![Edit modal](https://github.com/user-attachments/assets/560cd03e-b267-484d-a033-a309619a7dcd)

![Info modal](https://github.com/user-attachments/assets/f473b6a2-34db-4588-99e5-4520247724a7)

![share window](https://github.com/user-attachments/assets/11ba4926-2a18-4669-8550-11b40eab06d7)

![mark as completed](https://github.com/user-attachments/assets/c7338f0a-c34d-484f-aa62-68aaffb1235d)

![delete modal](https://github.com/user-attachments/assets/60f88625-fff7-4210-8c6c-9f73b1d44916)


---

## 📦 Project Structure

```bash
src/
├── components/        # All reusable components (modals, cards, etc.)
├── navigation/        # Stack navigator setup
├── screens/           # Main screens like TodoScreen
├── stores/            # Zustand logic
├── styles/            # Theme colors & global styles
├── types/             # TypeScript interfaces
├── utils/             # Helper utilities (icons, formats)
└── assets/            # Icons and images

```

---

## 🔧 Setup Instructions

✅ Prerequisites
- Node.js >=14

- React Native CLI

- Android Studio or Xcode (with emulators)

- Java JDK and Android SDK (configured via Android Studio)

📥 Installation

 Clone the repo
 
```bash
 
git clone https://github.com/your-username/react-native-todo-app.git
```

 Navigate to the project folder
 
```bash
cd react-native-todo-app
```

 Install dependencies
 
```bash
npm install
```
 or
 
```bash
yarn install
```

▶️ Running the App
📱 Android:

```bash
npx react-native run-android
```

🍏 iOS:

```bash
npx react-native run-ios
```





